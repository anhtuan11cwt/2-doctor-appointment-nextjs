"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface TextInputProps<T extends Record<string, unknown>> {
	errors: FieldErrors<T>;
	isLoading?: boolean;
	label: string;
	name: Path<T>;
	onTogglePassword?: () => void;
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
		<div className={isLoading ? "pointer-events-none opacity-50" : ""}>
			<label
				className="mb-0.5 block font-medium text-gray-700 text-sm"
				htmlFor={name}
			>
				{label}
			</label>
			<div className="relative">
				<input
					className={`w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
						isLoading ? "cursor-not-allowed bg-gray-100" : ""
					}`}
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
						className={`absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 ${
							isLoading ? "cursor-not-allowed" : ""
						}`}
						disabled={isLoading}
						onClick={() =>
							isControlled
								? onTogglePassword?.()
								: setShowPasswordLocal(!showPasswordLocal)
						}
						type="button"
					>
						{showPassword ? (
							<EyeOff className="h-4 w-4" />
						) : (
							<Eye className="h-4 w-4" />
						)}
					</button>
				)}
			</div>
			<div className="h-3">
				{errors[name] && (
					<p className="text-red-600 text-xs">
						{errors[name]?.message as string}
					</p>
				)}
			</div>
		</div>
	);
}
