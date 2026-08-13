"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const tabs = [
	{ label: "Chung", value: "general" },
	{ label: "Bảo mật", value: "security" },
	{ label: "Thông báo", value: "notifications" },
];

export default function SettingsPage() {
	const [isLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="space-y-6">
			<div>
				<h2 className="font-bold text-2xl tracking-tight">Cài đặt</h2>
				<p className="text-muted-foreground">
					Quản lý cài đặt tài khoản và hệ thống.
				</p>
			</div>
			<Separator />
			<Tabs defaultValue="general">
				<TabsList>
					{tabs.map((tab) => (
						<TabsTrigger key={tab.value} value={tab.value}>
							{tab.label}
						</TabsTrigger>
					))}
				</TabsList>

				<TabsContent className="space-y-4" value="general">
					<div className="space-y-2">
						<Label htmlFor="name">Họ và tên</Label>
						<Input defaultValue="Nguyễn Văn A" id="name" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input defaultValue="doctor@example.com" id="email" type="email" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="phone">Số điện thoại</Label>
						<Input defaultValue="0901234567" id="phone" type="tel" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="bio">Giới thiệu</Label>
						<Textarea
							defaultValue="Bác sĩ chuyên khoa nội tổng quát với 10 năm kinh nghiệm."
							id="bio"
						/>
					</div>
					<Button disabled={isLoading}>Lưu thay đổi</Button>
				</TabsContent>

				<TabsContent className="space-y-4" value="security">
					<div className="space-y-2">
						<Label htmlFor="current-password">Mật khẩu hiện tại</Label>
						<div className="relative">
							<Input
								id="current-password"
								type={showPassword ? "text" : "password"}
							/>
							<button
								className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								onClick={() => setShowPassword(!showPassword)}
								type="button"
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="new-password">Mật khẩu mới</Label>
						<div className="relative">
							<Input
								id="new-password"
								type={showPassword ? "text" : "password"}
							/>
							<button
								className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								onClick={() => setShowPassword(!showPassword)}
								type="button"
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="confirm-password">Xác nhận mật khẩu mới</Label>
						<div className="relative">
							<Input
								id="confirm-password"
								type={showPassword ? "text" : "password"}
							/>
							<button
								className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
								onClick={() => setShowPassword(!showPassword)}
								type="button"
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</button>
						</div>
					</div>
					<Button disabled={isLoading}>Đổi mật khẩu</Button>
				</TabsContent>

				<TabsContent className="space-y-4" value="notifications">
					<div className="flex items-center space-x-2">
						<Checkbox defaultChecked id="email-notifications" />
						<Label htmlFor="email-notifications">Thông báo qua email</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox defaultChecked id="appointment-reminder" />
						<Label htmlFor="appointment-reminder">Nhắc nhở lịch hẹn</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="marketing" />
						<Label htmlFor="marketing">Thông báo khuyến mãi</Label>
					</div>
					<Button disabled={isLoading}>Lưu cài đặt</Button>
				</TabsContent>
			</Tabs>
		</div>
	);
}
