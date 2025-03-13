import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export const POST = async (req) => {
    try {
        const { email } = await req.json();
        if (!email) return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });

        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "🎉 You're In! Welcome to SR Portraits & Events ✨",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center; background-color: #f9f9f9; border-radius: 10px;">
                    <h2 style="color: #D32F2F;">📸 Welcome to SR Portraits & Events! 🎊</h2>
                    <p style="font-size: 16px; color: #333;">We're thrilled to have you on board! Get ready to receive the latest updates, exclusive event sneak peeks, and special offers.</p>
                    <p style="font-size: 16px; color: #333;">Let’s capture memories that last a lifetime! ✨</p>
                    <a href="https://srportraits.com" style="display: inline-block; padding: 10px 20px; margin-top: 10px; background-color: #D32F2F; color: #fff; text-decoration: none; font-weight: bold; border-radius: 5px;">
                        Explore Now 📷
                    </a>
                    <p style="margin-top: 20px; font-size: 14px; color: #777;">Follow us on <a href="https://instagram.com/srportraits" style="color: #D32F2F;">Instagram</a> for more updates! 🚀</p>
                </div>
            `,
        });
        

        const { error } = await supabase.from("subscriptions").insert([{ email }]);
        if (error) throw error;

        return new Response(JSON.stringify({ success: true, message: "Email sent and stored!" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message || "Failed to process request" }), { status: 500 });
    }
};
