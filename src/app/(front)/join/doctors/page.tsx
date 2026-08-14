import { Check, FileText, PhoneCall, Stethoscope } from "lucide-react";
import Image from "next/image";
import { CustomAccordion } from "@/components/custom-accordion";
import { CustomButton } from "@/components/custom-button";
import { Pricing } from "@/components/pricing";

const features = [
	"Không phí đăng ký cho bác sĩ",
	"Quy trình đăng ký đơn giản",
	"Cập nhật thời gian thực",
	"Hỗ trợ kỹ thuật 24/7",
	"Quản lý lịch hẹn dễ dàng",
];

const steps = [
	{
		description:
			"Đăng ký tài khoản và điền thông tin phòng khám của bạn vào hệ thống.",
		title: "Đăng ký thông tin",
	},
	{
		description: "Tạo các gói dịch vụ và mức giá cạnh tranh cho bệnh nhân.",
		title: "Tạo ưu đãi dịch vụ",
	},
	{
		description: "Bắt đầu nhận lịch hẹn và khám bệnh ngay lập tức.",
		title: "Bắt đầu khám bệnh",
	},
];

const cards = [
	{
		description: "Bắt đầu quy trình đăng ký trở thành bác sĩ trên nền tảng.",
		href: "/register?role=doctor",
		icon: FileText,
		linkTitle: "Bắt đầu",
		title: "Đăng ký mới",
	},
	{
		description: "Tiếp tục hoàn thiện hồ sơ đăng ký của bạn.",
		href: "/register?role=doctor",
		icon: Stethoscope,
		linkTitle: "Tiếp tục",
		title: "Hoàn tất hồ sơ",
	},
	{
		description: "Đặt lịch gọi tư vấn với đội ngũ hỗ trợ của chúng tôi.",
		href: "/contact",
		icon: PhoneCall,
		linkTitle: "Đặt lịch",
		title: "Tư vấn trực tuyến",
	},
	{
		description: "Kiểm tra trạng thái hồ sơ đăng ký của bạn.",
		href: "/dashboard",
		icon: FileText,
		linkTitle: "Kiểm tra",
		title: "Tra cứu trạng thái",
	},
];

const faqs = [
	{
		answer:
			"Bạn chỉ cần nhấn nút 'Bắt đầu ngay' trên trang này, điền thông tin cơ bản về phòng khám và chuyên khoa. Quy trình đăng ký chỉ mất khoảng 5-10 phút.",
		question: "Làm thế nào để đăng ký phòng khám?",
	},
	{
		answer:
			"Gói Basic hoàn toàn miễn phí. Bạn chỉ trả phí giao dịch khi có bệnh nhân đặt lịch khám qua nền tảng. Không có phí ẩn hay chi phí phát sinh.",
		question: "Chi phí tham gia là bao nhiêu?",
	},
	{
		answer:
			"Sau khi đăng ký thành công, bạn sẽ có bảng điều khiển riêng để quản lý lịch hẹn, bệnh nhân và thông tin phòng khám. Hệ thống gửi thông báo tự động khi có lịch hẹn mới.",
		question: "Tôi có thể quản lý lịch hẹn như thế nào?",
	},
	{
		answer:
			"Thông thường hồ sơ sẽ được duyệt trong vòng 24-48 giờ làm việc. Chúng tôi sẽ gửi email thông báo khi hồ sơ được phê duyệt.",
		question: "Thời gian xử lý hồ sơ là bao lâu?",
	},
	{
		answer:
			"Có, đội ngũ hỗ trợ kỹ thuật của chúng tôi hoạt động 24/7. Bạn có thể liên hệ qua email, chat trực tuyến hoặc điện thoại.",
		question: "Có hỗ trợ kỹ thuật không?",
	},
	{
		answer:
			"Có, bạn có thể hủy đăng ký bất cứ lúc nào mà không mất phí. Tuy nhiên, chúng tôi sẽ rất tiếc nếu bạn rời đi và luôn sẵn sàng lắng nghe phản hồi để cải thiện dịch vụ.",
		question: "Tôi có thể hủy đăng ký bất cứ lúc nào không?",
	},
];

export default function JoinDoctorsPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 dark:from-slate-950 dark:to-background">
				<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-2">
					<div>
						<h1 className="mb-6 font-bold text-4xl text-foreground leading-tight md:text-5xl">
							Xây dựng phòng khám
							<span className="text-primary"> trực tiếp</span> phát triển
						</h1>
						<p className="mb-8 text-lg text-muted-foreground leading-relaxed">
							Tham gia nền tảng đặt lịch khám bệnh hàng đầu. Kết nối với hàng
							ngàn bệnh nhân đang tìm kiếm dịch vụ chăm sóc sức khỏe chất lượng.
						</p>
						<div className="mb-8">
							<CustomButton
								className="bg-primary px-8 py-3 text-lg hover:bg-primary/90"
								href="/register?role=doctor"
								title="Bắt đầu ngay"
							/>
						</div>
						<ul className="space-y-3">
							{features.map((feature) => (
								<li className="flex items-center gap-2" key={feature}>
									<Check className="h-5 w-5 flex-shrink-0 text-primary" />
									<span className="text-foreground/80">{feature}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="hidden md:block">
						<Image
							alt="Bác sĩ"
							className="rounded-xl shadow-lg"
							height={848}
							src="/doc1.png"
							width={1170}
						/>
					</div>
				</div>
			</section>

			{/* Steps Section */}
			<section className="bg-background py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-8">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-3xl text-foreground md:text-4xl">
							Tham gia Đặt Lịch Khám để tăng doanh thu
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Quy trình đơn giản 3 bước để bắt đầu nhận bệnh nhân mới
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						{steps.map((step, index) => (
							<div
								className="rounded-xl border border-border bg-muted p-6 text-center"
								key={step.title}
							>
								<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xl">
									{index + 1}
								</div>
								<h3 className="mb-2 font-semibold text-foreground text-lg">
									{step.title}
								</h3>
								<p className="text-muted-foreground text-sm">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Action Cards Section */}
			<section className="bg-muted py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-8">
					<h2 className="mb-12 text-center font-bold text-3xl text-foreground">
						Bắt đầu hành trình của bạn
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{cards.map((card) => {
							const Icon = card.icon;
							return (
								<div
									className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
									key={card.title}
								>
									<Icon className="mb-4 h-8 w-8 text-primary" />
									<h3 className="mb-2 font-semibold text-foreground">
										{card.title}
									</h3>
									<p className="mb-4 text-muted-foreground text-sm">
										{card.description}
									</p>
									<CustomButton
										className="w-full"
										href={card.href}
										title={card.linkTitle}
										variant="outline"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="bg-background py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-8">
					<h2 className="mb-12 text-center font-bold text-3xl text-foreground">
						Câu hỏi thường gặp
					</h2>
					<CustomAccordion items={faqs} />
				</div>
			</section>

			{/* Pricing Section */}
			<section className="bg-muted py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-8">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-3xl text-foreground">
							Bảng giá dịch vụ
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Chọn gói phù hợp với quy mô phòng khám của bạn
						</p>
					</div>
					<Pricing />
				</div>
			</section>
		</div>
	);
}
