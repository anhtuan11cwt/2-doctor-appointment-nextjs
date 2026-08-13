"use client";

import { useEffect, useState } from "react";

interface TransitionTextProps {
	className?: string;
	interval?: number;
	texts: string[];
}

export function TransitionText({
	texts,
	className = "",
	interval = 3000,
}: TransitionTextProps) {
	const [index, setIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsVisible(false);
			setTimeout(() => {
				setIndex((prevIndex) => (prevIndex + 1) % texts.length);
				setIsVisible(true);
			}, 300);
		}, interval);

		return () => clearInterval(intervalId);
	}, [texts.length, interval]);

	return (
		<span
			className={`${className} inline-block transition-all duration-300 ${
				isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
			}`}
		>
			{texts[index]}
		</span>
	);
}
