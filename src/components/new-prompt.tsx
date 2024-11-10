"use client";

import { useEffect, useRef } from "react";

export const NewPrompt = () => {
	const endRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (endRef.current) {
			endRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);
	return (
		<>
			<div className="pb-[100px]" ref={endRef}></div>
			<form className="w-1/2 absolute bottom-0 bg-[#2c2937] rounded-[20px] flex items-center gap-5 px-5 mb-5">
				<label
					htmlFor="file"
					className="rounded-[50%] bg-[#605e68] border-none p-2.5 flex items-center justify-center cursor-pointer"
				>
					<img src="/attachment.png" alt="attachment" className="size-4" />
				</label>
				<input
					type="file"
					multiple={false}
					hidden
					id="file"
					className="flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]"
				/>
				<input
					type="text"
					className="flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]"
				/>
				<button className="rounded-[50%] bg-[#605e68] border-none p-2.5 flex items-center justify-center cursor-pointer">
					<img src="/arrow.png" alt="arrow" className="size-4" />
				</button>
			</form>
		</>
	);
};
