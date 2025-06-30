import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, name, menuDetails } = body;

        if (!email || !name || !menuDetails) {
            return new Response(JSON.stringify({ message: "Missing parameters" }), {
                status: 400,
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Reservation Confirmation",
            text: `Thank you for your reservation!\n\nName: ${name}\n\nMenu:\n${menuDetails}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent successfully" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Email send error:", error);
        return new Response(JSON.stringify({ message: "Failed to send email" }), {
            status: 500,
        });
    }
}
