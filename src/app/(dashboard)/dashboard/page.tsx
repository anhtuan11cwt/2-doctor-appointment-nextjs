import { Activity, Calendar, DollarSign, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const stats = [
	{
		description: "+20.1% so với tháng trước",
		icon: Calendar,
		title: "Tổng lịch hẹn",
		value: "1,234",
	},
	{
		description: "+180 bệnh nhân mới",
		icon: Users,
		title: "Bệnh nhân mới",
		value: "567",
	},
	{
		description: "+19% so với tháng trước",
		icon: DollarSign,
		title: "Doanh thu",
		value: "45.600.000đ",
	},
	{
		description: "+2 bác sĩ mới hôm nay",
		icon: Activity,
		title: "Bác sĩ online",
		value: "23",
	},
];

const recentAppointments = [
	{
		date: "14/08/2026",
		doctor: "BS. Nguyễn Văn A",
		id: "APPT-001",
		patient: "Trần Thị B",
		status: "Xác nhận",
	},
	{
		date: "14/08/2026",
		doctor: "BS. Lê Văn C",
		id: "APPT-002",
		patient: "Phạm Thị D",
		status: "Chờ xác nhận",
	},
	{
		date: "13/08/2026",
		doctor: "BS. Hoàng Thị E",
		id: "APPT-003",
		patient: "Nguyễn Văn F",
		status: "Hoàn thành",
	},
	{
		date: "13/08/2026",
		doctor: "BS. Trần Văn G",
		id: "APPT-004",
		patient: "Lê Thị H",
		status: "Đã hủy",
	},
	{
		date: "12/08/2026",
		doctor: "BS. Nguyễn Văn A",
		id: "APPT-005",
		patient: "Vũ Thị I",
		status: "Hoàn thành",
	},
];

const statusVariant: Record<
	string,
	"default" | "secondary" | "destructive" | "outline"
> = {
	"Chờ xác nhận": "secondary",
	"Hoàn thành": "outline",
	"Xác nhận": "default",
	"Đã hủy": "destructive",
};

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="font-bold text-2xl tracking-tight">Tổng quan</h2>
				<p className="text-muted-foreground">
					Chào mừng trở lại! Đây là tổng quan hệ thống hôm nay.
				</p>
			</div>

			{/* Stats Cards */}
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

			{/* Recent Appointments */}
			<div className="grid gap-4 lg:grid-cols-2">
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>Lịch hẹn gần đây</CardTitle>
						<CardDescription>
							Danh sách 5 lịch hẹn mới nhất trong hệ thống.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Mã</TableHead>
									<TableHead>Bệnh nhân</TableHead>
									<TableHead>Bác sĩ</TableHead>
									<TableHead>Ngày</TableHead>
									<TableHead>Trạng thái</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{recentAppointments.map((appt) => (
									<TableRow key={appt.id}>
										<TableCell className="font-medium">{appt.id}</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												<Avatar className="h-8 w-8">
													<AvatarFallback>
														{appt.patient
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>
												{appt.patient}
											</div>
										</TableCell>
										<TableCell>{appt.doctor}</TableCell>
										<TableCell>{appt.date}</TableCell>
										<TableCell>
											<Badge variant={statusVariant[appt.status] || "default"}>
												{appt.status}
											</Badge>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
