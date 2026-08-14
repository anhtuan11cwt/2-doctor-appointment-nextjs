"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { FieldErrors, Path, UseFormRegister } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface TextInputProps<T extends Record<string, unknown>> {
	errors: FieldErrors<T>;
	isLoading?: boolean;
	label: string;
	name: Path<T>;
	onTogglePassword?: () => void;
	page?: "login" | "register";
	placeholder?: string;
	register: UseFormRegister<T>;
	showPassword?: boolean;
	type?: string;
}

export function TextInput<T extends Record<string, unknown>>({
	label,
	name,
	onTogglePassword,
	register,
	errors,
	showPassword: showPasswordProp,
	type = "text",
	placeholder,
	isLoading = false,
	page,
}: TextInputProps<T>) {
	const [showPasswordLocal, setShowPasswordLocal] = useState(false);
	const isPassword = type === "password";
	const isControlled = isPassword && showPasswordProp !== undefined;
	const showPassword = isControlled ? showPasswordProp : showPasswordLocal;
	const isPhone = type === "tel";

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (isPhone) {
			// Cho phép: backspace, delete, tab, escape, enter, mũi tên
			const allowedKeys = [
				"Backspace",
				"Delete",
				"Tab",
				"Escape",
				"Enter",
				"ArrowLeft",
				"ArrowRight",
			];
			// Cho phép số 0-9
			const isNumber = /^[0-9]$/.test(e.key);
			// Cho phép Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
			const isCtrl = e.ctrlKey && ["a", "c", "v", "x"].includes(e.key);

			if (!isNumber && !allowedKeys.includes(e.key) && !isCtrl) {
				e.preventDefault();
			}
		}
	};

	return (
		<div
			className={cn("space-y-1", isLoading && "pointer-events-none opacity-50")}
		>
			<Label
				className={cn(
					"text-foreground",
					page === "login" && isPassword && "justify-between",
				)}
				htmlFor={name}
			>
				<span>{label}</span>
				{page === "login" && isPassword && (
					<Link
						className="font-normal text-primary hover:underline"
						href="/forgot-password"
					>
						Quên mật khẩu?
					</Link>
				)}
			</Label>
			<div className="relative">
				<Input
					aria-invalid={!!errors[name]}
					className={cn(isPassword && "pr-10")}
					disabled={isLoading}
					id={name}
					maxLength={isPhone ? 10 : undefined}
					onKeyDown={handleKeyDown}
					placeholder={placeholder || label}
					type={isPassword && showPassword ? "text" : type}
					{...register(name, { required: `${label} là bắt buộc` })}
				/>
				{isPassword && (
					<button
						className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed"
						disabled={isLoading}
						onClick={() =>
							isControlled
								? onTogglePassword?.()
								: setShowPasswordLocal(!showPasswordLocal)
						}
						type="button"
					>
						{showPassword ? (
							<EyeOff className="size-4" />
						) : (
							<Eye className="size-4" />
						)}
					</button>
				)}
			</div>
			<div className="h-3">
				{errors[name] && (
					<p className="text-destructive text-xs">
						{errors[name]?.message as string}
					</p>
				)}
			</div>
		</div>
	);
}
