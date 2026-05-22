import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Enquiry <gaganshuklarmg@gmail.com>",
        to: ["contact@gaganshukla.in"],
        reply_to: email,
        subject: `New Portfolio Enquiry: ${subject || "No Subject"}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">New Portfolio Enquiry</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.5; color: #444;">${message}</p>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
              Sent via Gagan Shukla Portfolio API
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API Error:", errorText);
      throw new Error(errorText);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("send_email function error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
