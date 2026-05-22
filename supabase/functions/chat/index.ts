import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { GoogleGenerativeAI, FunctionDeclaration, SchemaType } from "npm:@google/generative-ai";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Tool declaration for sending email
const sendEmailDeclaration: FunctionDeclaration = {
  name: "send_email",
  description: "Send an email message to Gagan Shukla on behalf of the user.",
  parameters: {
    type: SchemaType.OBJECT,
    properties: {
      name: { type: SchemaType.STRING, description: "The user's name." },
      email: { type: SchemaType.STRING, description: "The user's email address." },
      subject: { type: SchemaType.STRING, description: "A brief subject." },
      message: { type: SchemaType.STRING, description: "The message content." },
    },
    required: ["name", "email", "message"],
  },
};

const SYSTEM_PROMPT = `You are the personal AI Assistant for Gagan Shukla's portfolio website. 
Gagan is a top-tier Full-Stack and Mobile Developer specializing in Flutter, React Native, Node.js, and Supabase.
Your job is to answer questions about Gagan's skills, experience, and projects. 
Maintain a highly professional, concise, and helpful tone—like a high-end concierge.

Here is Gagan's actual portfolio data to use for answering questions accurately:

**PROJECTS:**
1. AURA: A premium experiential lifestyle platform to discover and book tour destinations. Built with Flutter, REST API, Maps SDK.
2. GlowCart: An elegant online Cosmetic and beauty product shopping application built using Flutter.
3. HashKart: End-to-end e-commerce solution with integrated payment gateways and real-time inventory management. Built with Flutter, Rust, PostgreSQL.
4. TruckMitr: A comprehensive, driver-focused digital platform designed to empower truck drivers and streamline logistics in India. Built with React Native, Redux, SQLite.
5. TMConnact: A real-time communication bridging tool for logistics networks, focusing on low-latency data sync. Built with Flutter, Websockets, Riverpod.
6. HRMS & CRM: Integrated workforce management and sales tracking system used by mid-size enterprises. Built with React Native, Tailwind, Node.js.

**EXPERIENCE:**
1. TruckMitr (Oct 2025 - Present): Flutter & React Native Developer. Architecting scalable mobile solutions for logistics tracking, optimizing real-time sync with local SQLite, and leading Clean Architecture transition.
2. Easyian (Apr 2025 - Sep 2025): Flutter Developer. Developed consumer-facing apps, integrated Firebase Auth/FCM, and collaborated on design systems.
3. Codelevate (Jan 2025 - Mar 2025): Full-Stack Developer. Built web apps with T3 stack (Node, Next, Postgres), developed RESTful APIs, managed CI/CD with GitHub Actions and Vercel.

**SKILLS:**
Mobile: Flutter, Dart, React Native, iOS/Android Native Configs.
Frontend: React.js, Next.js, Modern CSS, ES6+.
Backend/Cloud: Supabase, Node.js, Express, PostgreSQL, Firebase.

If a user wants to contact Gagan or hire him, encourage them, and offer to send an email for them right now using the send_email tool. You MUST ask for their name and email address if they want you to send an email. Once you have their name, email, and message, use the send_email tool to send it.
Be conversational. Keep responses relatively short unless asked for details.`;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { history, message } = await req.json();

    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) throw new Error("Missing GEMINI_API_KEY");

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: SYSTEM_PROMPT,
      tools: [{ functionDeclarations: [sendEmailDeclaration] }],
    });

    const chatSession = model.startChat({
      history: history || [],
    });

    // We will handle the function call logic.
    // Since we want streaming, we first send the message and check if a function call is returned.
    const result = await chatSession.sendMessage(message);
    const response = result.response;
    
    // Check if the model decided to call a function
    const functionCalls = response.functionCalls();
    
    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      if (call.name === "send_email") {
        const { name, email, subject, message: emailMessage } = call.args;
        
        // Connect to Supabase to insert into contact_messages
        const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
        const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        
        const { error } = await supabase.from("contact_messages").insert([{
          name, email, subject: subject || "AI Chatbot Enquiry", message: emailMessage
        }]);

        if (error) {
          console.error("Supabase insert error:", error);
        }

        // Send the function response back to the model to get the final text response
        const functionResponseResult = await chatSession.sendMessage([{
          functionResponse: {
            name: "send_email",
            response: { success: !error, note: error ? "Failed to send" : "Email sent successfully" }
          }
        }]);
        
        return new Response(JSON.stringify({ text: functionResponseResult.response.text() }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // Normal text response
    return new Response(JSON.stringify({ text: response.text() }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Edge Function Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
