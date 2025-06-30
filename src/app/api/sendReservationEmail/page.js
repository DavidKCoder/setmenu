import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, name, menuDetails } = req.body;

    if (!email || !name || !menuDetails) {
        return res.status(400).json({ message: "Missing parameters" });
    }

    try {
        // Configure your SMTP transporter (example uses Gmail SMTP)
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
            text: `Thank you for your reservation!\n\nDetails:\n${name}\n\nMenu:\n${menuDetails}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ message: "Failed to send email" });
    }
}
