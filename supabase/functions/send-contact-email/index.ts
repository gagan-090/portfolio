import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

Deno.serve(async (req) => {
  try {
    // Parse the webhook payload from Supabase DB trigger
    const payload = await req.json();

    // The payload from Supabase database webhook contains the new record
    const { record } = payload;

    if (!record) {
      return new Response("No record found in payload", { status: 400 });
    }

    const { name, email, subject, message } = record;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Enquiry <contact@gaganshukla.in>",
      to: ["gaganshuklarmg@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Enquiry: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f4f4; padding: 20px;">
          <div style="background: #0f0f0f; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px; letter-spacing: 2px;">GS</h1>
            <p style="margin: 8px 0 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 3px;">New Portfolio Enquiry</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="color: #555; font-size: 14px;">Someone just submitted your portfolio contact form.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 30%;">NAME</td>
                <td style="padding: 12px 0; color: #333; font-size: 14px;">${name || "Unknown"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">EMAIL</td>
                <td style="padding: 12px 0; color: #333; font-size: 14px;">${email || "Unknown"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px 0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">SUBJECT</td>
                <td style="padding: 12px 0; color: #333; font-size: 14px;">${subject || "No Subject"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">MESSAGE</td>
                <td style="padding: 12px 0; color: #333; font-size: 14px;">${message || ""}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="background: #0f0f0f; color: white; padding: 12px 30px; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; border-radius: 4px;">Reply to Client</a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify(error), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(String(err?.message ?? err), { status: 500 });
  }
});
