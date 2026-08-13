import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	auth: {
		pass: process.env.GMAIL_APP_PASSWORD,
		user: process.env.GMAIL_USER,
	},
	service: "gmail",
});

interface SendVerificationEmailProps {
	name: string;
	to: string;
	token: string;
}

export async function sendVerificationEmail({
	to,
	name,
	token,
}: SendVerificationEmailProps) {
	const mailOptions = {
		from: `"Đặt Lịch Khám Bệnh" <${process.env.GMAIL_USER}>`,
		html: `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<div style="background-color: #2563eb; padding: 20px; text-align: center;">
					<h1 style="color: white; margin: 0;">Đặt Lịch Khám Bệnh</h1>
				</div>
				<div style="padding: 20px; background-color: #f9fafb;">
					<h2 style="color: #1f2937;">Xin chào ${name},</h2>
					<p style="color: #4b5563;">Cảm ơn bạn đã đăng ký tài khoản. Vui lòng sử dụng mã xác thực bên dưới để hoàn tất đăng ký:</p>
					<div style="text-align: center; margin: 30px 0;">
						<span style="font-size: 32px; font-weight: bold; color: #2563eb; letter-spacing: 8px; padding: 10px 20px; background-color: #eff6ff; border-radius: 8px;">${token}</span>
					</div>
					<p style="color: #4b5563;">Mã này sẽ hết hạn sau 10 phút.</p>
					<p style="color: #4b5563;">Nếu bạn không đăng ký tài khoản, vui lòng bỏ qua email này.</p>
				</div>
				<div style="padding: 20px; text-align: center; background-color: #e5e7eb;">
					<p style="color: #6b7280; margin: 0;">© 2026 Đặt Lịch Khám Bệnh. Bảo lưu mọi quyền.</p>
				</div>
			</div>
		`,
		subject: "Xác thực email - Đặt Lịch Khám Bệnh",
		to,
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error("Lỗi khi gửi email:", error);
		return { error, success: false };
	}
}
