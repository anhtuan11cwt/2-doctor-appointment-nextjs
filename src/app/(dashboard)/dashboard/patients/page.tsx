import { Search, UserPlus } from "lucide-react";
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

const patients = [
	{
		email: "tranthib@email.com",
		gender: "Nữ",
		id: "PAT-001",
		lastVisit: "14/08/2026",
		name: "Trần Thị B",
		phone: "0901234567",
		status: "Đang điều trị",
	},
	{
		email: "phamthid@email.com",
		gender: "Nữ",
		id: "PAT-002",
		lastVisit: "13/08/2026",
		name: "Phạm Thị D",
		phone: "0912345678",
		status: "Hoàn thành",
	},
	{
		email: "nguyenvanf@email.com",
		gender: "Nam",
		id: "PAT-003",
		lastVisit: "12/08/2026",
		name: "Nguyễn Văn F",
		phone: "0923456789",
		status: "Đang điều trị",
	},
	{
		email: "lethih@email.com",
		gender: "Nữ",
		id: "PAT-004",
		lastVisit: "11/08/2026",
		name: "Lê Thị H",
		phone: "0934567890",
		status: "Hoàn thành",
	},
	{
		email: "vuthii@email.com",
		gender: "Nữ",
		id: "PAT-005",
		lastVisit: "10/08/2026",
		name: "Vũ Thị I",
		phone: "0945678901",
		status: "Đang điều trị",
	},
	{
		email: "dangvank@email.com",
		gender: "Nam",
		id: "PAT-006",
		lastVisit: "09/08/2026",
		name: "Đặng Văn K",
		phone: "0956789012",
		status: "Hoàn thành",
	},
];

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
	"Hoàn thành": "outline",
	"Đang điều trị": "default",
};

export default function PatientsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="font-bold text-2xl tracking-tight">Bệnh nhân</h2>
					<p className="text-muted-foreground">
						Quản lý thông tin bệnh nhân trong hệ thống.
					</p>
				</div>
				<Button>
					<UserPlus className="mr-2 h-4 w-4" />
					Thêm bệnh nhân
				</Button>
			</div>

			<Card>
				<CardHeader>
					<div className="relative">
						<Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
						<Input className="pl-8" placeholder="Tìm kiếm bệnh nhân..." />
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Mã</TableHead>
								<TableHead>Họ tên</TableHead>
								<TableHead>Giới tính</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Điện thoại</TableHead>
								<TableHead>Khám gần nhất</TableHead>
								<TableHead>Trạng thái</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{patients.map((patient) => (
								<TableRow key={patient.id}>
									<TableCell className="font-medium">{patient.id}</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<Avatar className="h-8 w-8">
												<AvatarFallback>
													{patient.name
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											{patient.name}
										</div>
									</TableCell>
									<TableCell>{patient.gender}</TableCell>
									<TableCell>{patient.email}</TableCell>
									<TableCell>{patient.phone}</TableCell>
									<TableCell>{patient.lastVisit}</TableCell>
									<TableCell>
										<Badge variant={statusVariant[patient.status] || "default"}>
											{patient.status}
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
