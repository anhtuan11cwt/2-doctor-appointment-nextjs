"use client";

import { useState } from "react";
import { Availability } from "./availability";

export function DoctorDetails() {
	const [activeTab, setActiveTab] = useState("availability");

	return (
		<div className="mt-6">
			{/* Tab buttons */}
			<div className="flex gap-2 border-border border-b pb-4">
				<button
					className={`rounded-md px-4 py-2 font-medium text-sm transition-all duration-300 ${
						activeTab === "service-details"
							? "bg-primary text-primary-foreground"
							: "bg-muted text-muted-foreground hover:bg-muted/80"
					}`}
					onClick={() => setActiveTab("service-details")}
					type="button"
				>
					Chi tiết dịch vụ
				</button>
				<button
					className={`rounded-md px-4 py-2 font-medium text-sm transition-all duration-300 ${
						activeTab === "availability"
							? "bg-primary text-primary-foreground"
							: "bg-muted text-muted-foreground hover:bg-muted/80"
					}`}
					onClick={() => setActiveTab("availability")}
					type="button"
				>
					Lịch khám
				</button>
			</div>

			{/* Tab content */}
			<div className="py-6">
				{activeTab === "service-details" && (
					<div className="space-y-6">
						<div>
							<h3 className="mb-3 font-bold text-foreground text-lg">
								Bao gồm những gì
							</h3>
							<ul className="space-y-2 text-muted-foreground">
								<li className="flex items-center gap-2">
									<span className="h-2 w-2 rounded-full bg-green-500" />
									Tư vấn trực tuyến 15 phút
								</li>
								<li className="flex items-center gap-2">
									<span className="h-2 w-2 rounded-full bg-green-500" />
									Đơn thuốc điện tử
								</li>
								<li className="flex items-center gap-2">
									<span className="h-2 w-2 rounded-full bg-green-500" />
									Theo dõi sau khám
								</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-3 font-bold text-foreground text-lg">
								Về bác sĩ
							</h3>
							<p className="text-muted-foreground">
								Bác sĩ có nhiều năm kinh nghiệm trong lĩnh vực khám chữa bệnh.
								Đã điều trị thành công cho hàng nghìn bệnh nhân.
							</p>
						</div>

						<div>
							<h3 className="mb-3 font-bold text-foreground text-lg">
								Chứng chỉ
							</h3>
							<ul className="space-y-2 text-muted-foreground">
								<li>Bằng Y khoa Đại học Y Hà Nội</li>
								<li>Chứng chỉ hành nghề khám chữa bệnh</li>
								<li>Thành viên Hội Y học Việt Nam</li>
							</ul>
						</div>
					</div>
				)}

				{activeTab === "availability" && <Availability />}
			</div>
		</div>
	);
}
