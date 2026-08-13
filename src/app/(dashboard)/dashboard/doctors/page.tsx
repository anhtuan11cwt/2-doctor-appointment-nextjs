import { Search, Stethoscope, UserPlus } from "lucide-react";
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

const doctors = [
	{
		email: "nguyenvana@hospital.com",
		id: "DOC-001",
		name: "BS. Nguyễn Văn A",
		patients: 128,
		phone: "0901234567",
		specialty: "Nội tổng quát",
		status: "Đang trực",
	},
	{
		email: "levanc@hospital.com",
		id: "DOC-002",
		name: "BS. Lê Văn C",
		patients: 95,
		phone: "0912345678",
		specialty: "Nhi khoa",
		status: "Đang trực",
	},
	{
		email: "hoangthie@hospital.com",
		id: "DOC-003",
		name: "BS. Hoàng Thị E",
		patients: 156,
		phone: "0923456789",
		specialty: "Da liễu",
		status: "Nghỉ phép",
	},
	{
		email: "tranvang@hospital.com",
		id: "DOC-004",
		name: "BS. Trần Văn G",
		patients: 112,
		phone: "0934567890",
		specialty: "Tim mạch",
		status: "Đang trực",
	},
	{
		email: "phamthih@hospital.com",
		id: "DOC-005",
		name: "BS. Phạm Thị H",
		patients: 87,
		phone: "0945678901",
		specialty: "Thần kinh",
		status: "Nghỉ phép",
	},
];

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
	"Nghỉ phép": "secondary",
	"Đang trực": "default",
};

export default function DoctorsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="font-bold text-2xl tracking-tight">Bác sĩ</h2>
					<p className="text-muted-foreground">
						Quản lý thông tin bác sĩ trong hệ thống.
					</p>
				</div>
				<Button>
					<UserPlus className="mr-2 h-4 w-4" />
					Thêm bác sĩ
				</Button>
			</div>

			<Card>
				<CardHeader>
					<div className="relative">
						<Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
						<Input className="pl-8" placeholder="Tìm kiếm bác sĩ..." />
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Mã</TableHead>
								<TableHead>Họ tên</TableHead>
								<TableHead>Chuyên khoa</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Điện thoại</TableHead>
								<TableHead>Bệnh nhân</TableHead>
								<TableHead>Trạng thái</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{doctors.map((doctor) => (
								<TableRow key={doctor.id}>
									<TableCell className="font-medium">{doctor.id}</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<Avatar className="h-8 w-8">
												<AvatarFallback>
													<Stethoscope className="h-4 w-4" />
												</AvatarFallback>
											</Avatar>
											{doctor.name}
										</div>
									</TableCell>
									<TableCell>{doctor.specialty}</TableCell>
									<TableCell>{doctor.email}</TableCell>
									<TableCell>{doctor.phone}</TableCell>
									<TableCell>{doctor.patients}</TableCell>
									<TableCell>
										<Badge variant={statusVariant[doctor.status] || "default"}>
											{doctor.status}
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
