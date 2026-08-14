import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

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
		<Button className="w-full gap-2" disabled={isLoading} type="submit">
			{isLoading ? (
				<>
					<Loader2 className="size-4 animate-spin" />
					{loadingTitle}
				</>
			) : (
				title
			)}
		</Button>
	);
}
