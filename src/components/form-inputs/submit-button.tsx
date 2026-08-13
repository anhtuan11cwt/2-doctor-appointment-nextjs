import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
	isLoading?: boolean;
	loadingTitle?: string;
	title: string;
}

export function SubmitButton({
	title,
	isLoading = false,
	loadingTitle = "Đang xử lý...",
}: SubmitButtonProps) {
	return (
		<button
			className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
			disabled={isLoading}
			type="submit"
		>
			{isLoading ? (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					{loadingTitle}
				</>
			) : (
				title
			)}
		</button>
	);
}
