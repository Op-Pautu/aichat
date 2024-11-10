"use client";

import React, { useEffect, useRef } from "react";

const ChatPage = () => {
	const endRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (endRef.current) {
			endRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);
	return (
		<div className="h-full flex flex-col items-center">
			<div className="flex-1 overflow-scroll w-full flex justify-center">
				<div className="w-1/2 flex flex-col">
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div ref={endRef}></div>
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
