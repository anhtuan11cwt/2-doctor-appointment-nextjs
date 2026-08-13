import { Calendar, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const appointments = [
	{
		date: "14/08/2026",
		doctor: "BS. Nguyễn Văn A",
		id: "APPT-001",
		patient: "Trần Thị B",
		status: "Xác nhận",
		time: "09:00",
	},
	{
		date: "14/08/2026",
		doctor: "BS. Lê Văn C",
		id: "APPT-002",
		patient: "Phạm Thị D",
		status: "Chờ xác nhận",
		time: "10:30",
	},
	{
		date: "14/08/2026",
		doctor: "BS. Hoàng Thị E",
		id: "APPT-003",
		patient: "Nguyễn Văn F",
		status: "Hoàn thành",
		time: "14:00",
	},
	{
		date: "13/08/2026",
		doctor: "BS. Trần Văn G",
		id: "APPT-004",
		patient: "Lê Thị H",
		status: "Đã hủy",
		time: "15:30",
	},
	{
		date: "13/08/2026",
		doctor: "BS. Nguyễn Văn A",
		id: "APPT-005",
		patient: "Vũ Thị I",
		status: "Hoàn thành",
		time: "08:00",
	},
	{
		date: "12/08/2026",
		doctor: "BS. Lê Văn C",
		id: "APPT-006",
		patient: "Đặng Văn K",
		status: "Xác nhận",
		time: "11:00",
	},
	{
		date: "12/08/2026",
		doctor: "BS. Hoàng Thị E",
		id: "APPT-007",
		patient: "Bùi Thị L",
		status: "Hoàn thành",
		time: "13:30",
	},
	{
		date: "11/08/2026",
		doctor: "BS. Trần Văn G",
		id: "APPT-008",
		patient: "Ngô Văn M",
		status: "Chờ xác nhận",
		time: "16:00",
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

export default function AppointmentsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="font-bold text-2xl tracking-tight">Lịch hẹn</h2>
					<p className="text-muted-foreground">
						Quản lý tất cả lịch hẹn trong hệ thống.
					</p>
				</div>
				<Button>
					<Calendar className="mr-2 h-4 w-4" />
					Thêm lịch hẹn
				</Button>
			</div>

			<Card>
				<CardHeader>
					<div className="flex items-center gap-4">
						<div className="relative flex-1">
							<Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
							<Input className="pl-8" placeholder="Tìm kiếm lịch hẹn..." />
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Mã</TableHead>
								<TableHead>Bệnh nhân</TableHead>
								<TableHead>Bác sĩ</TableHead>
								<TableHead>Ngày</TableHead>
								<TableHead>Giờ</TableHead>
								<TableHead>Trạng thái</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{appointments.map((appt) => (
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
									<TableCell>{appt.time}</TableCell>
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
	);
}
