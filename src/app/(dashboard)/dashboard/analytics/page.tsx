import {
	Activity,
	Calendar,
	DollarSign,
	TrendingUp,
	Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const stats = [
	{
		description: "+12% so với tháng trước",
		icon: DollarSign,
		title: "Doanh thu tháng",
		value: "125.600.000đ",
	},
	{
		description: "+8.2% so với tháng trước",
		icon: Calendar,
		title: "Lịch hẹn tháng",
		value: "456",
	},
	{
		description: "+15% so với tháng trước",
		icon: Users,
		title: "Bệnh nhân mới",
		value: "89",
	},
	{
		description: "Trung bình 4.8/5",
		icon: Activity,
		title: "Đánh giá trung bình",
		value: "4.8",
	},
];

const topDoctors = [
	{ appointments: 45, name: "BS. Nguyễn Văn A", revenue: "18.500.000đ" },
	{ appointments: 38, name: "BS. Hoàng Thị E", revenue: "15.200.000đ" },
	{ appointments: 32, name: "BS. Trần Văn G", revenue: "12.800.000đ" },
	{ appointments: 28, name: "BS. Lê Văn C", revenue: "11.200.000đ" },
	{ appointments: 22, name: "BS. Phạm Thị H", revenue: "8.800.000đ" },
];

const topSpecialties = [
	{ appointments: 120, name: "Nội tổng quát", percentage: 26 },
	{ appointments: 95, name: "Nhi khoa", percentage: 21 },
	{ appointments: 78, name: "Da liễu", percentage: 17 },
	{ appointments: 65, name: "Tim mạch", percentage: 14 },
	{ appointments: 52, name: "Thần kinh", percentage: 11 },
];

export default function AnalyticsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="font-bold text-2xl tracking-tight">Thống kê</h2>
				<p className="text-muted-foreground">
					Tổng quan về hiệu suất hoạt động của phòng khám.
				</p>
			</div>

			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => {
					const Icon = stat.icon;
					return (
						<Card key={stat.title}>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="font-medium text-sm">
									{stat.title}
								</CardTitle>
								<Icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="font-bold text-2xl">{stat.value}</div>
								<p className="text-muted-foreground text-xs">
									{stat.description}
								</p>
							</CardContent>
						</Card>
					);
				})}
			</div>

			<div className="grid gap-4 lg:grid-cols-2">
				{/* Top Doctors */}
				<Card>
					<CardHeader>
						<CardTitle>Bác sĩ hàng đầu</CardTitle>
						<CardDescription>
							Top 5 bác sĩ có nhiều lịch hẹn nhất tháng
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{topDoctors.map((doctor, index) => (
								<div
									className="flex items-center justify-between"
									key={doctor.name}
								>
									<div className="flex items-center gap-3">
										<Badge variant="outline">{index + 1}</Badge>
										<div>
											<p className="font-medium text-sm">{doctor.name}</p>
											<p className="text-muted-foreground text-xs">
												{doctor.appointments} lịch hẹn
											</p>
										</div>
									</div>
									<div className="flex items-center gap-1">
										<TrendingUp className="h-3 w-3 text-green-500" />
										<span className="font-medium text-sm">
											{doctor.revenue}
										</span>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Top Specialties */}
				<Card>
					<CardHeader>
						<CardTitle>Chuyên khoa phổ biến</CardTitle>
						<CardDescription>
							Top 5 chuyên khoa có nhiều lịch hẹn nhất
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{topSpecialties.map((specialty) => (
								<div className="space-y-1" key={specialty.name}>
									<div className="flex items-center justify-between">
										<p className="font-medium text-sm">{specialty.name}</p>
										<span className="text-muted-foreground text-xs">
											{specialty.appointments} lịch hẹn
										</span>
									</div>
									<div className="h-2 w-full rounded-full bg-muted">
										<div
											className="h-2 rounded-full bg-primary"
											style={{ width: `${specialty.percentage}%` }}
										/>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
