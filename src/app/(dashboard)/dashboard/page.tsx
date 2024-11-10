import {
	getKindeServerSession,
	LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
	const { isAuthenticated } = getKindeServerSession();
	return (await isAuthenticated()) ? (
		<div className="h-full flex flex-col items-center">
			<div className="flex-1 flex items-center justify-center flex-col w-1/2 gap-[50px]">
				<div className="flex items-center gap-5 opacity-[0.2]">
					<img src="/logo.png" alt="logo" className="size-16" />
					<h1 className="text-[4rem] xl:text-[4rem] bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-transparent">
						OP AI
					</h1>
				</div>
				<div className="w-full flex items-center justify-between gap-[50px]">
					<div className="flex flex-col gap-2.5 font-light text-sm p-5 border border-[#555] rounded-[20px] flex-1">
						<img
							src="/chat.png"
							alt="chat image"
							className="size-10 object-cover
						"
						/>
						<span>Create a New Chat</span>
					</div>
					<div className="flex flex-col gap-2.5 font-light text-sm p-5 border border-[#555] rounded-[20px] flex-1">
						<img
							src="/image.png"
							alt="image"
							className="size-10 object-cover
						"
						/>
						<span>Analyze Images</span>
					</div>
					<div className="flex flex-col gap-2.5 font-light text-sm p-5 border border-[#555] rounded-[20px] flex-1">
						<img
							src="/code.png"
							alt="code"
							className="size-10 object-cover
						"
						/>
						<span>Help me with my Code</span>
					</div>
				</div>
			</div>
			<div className="mt-auto w-1/2 bg-[#2c2937] rounded-[20px] flex	">
				<form className="size-full flex items-center justify-between gap-5 mb-2.5">
					<input
						type="text"
						placeholder="Ask me anything..."
						className="flex-1 p-5 bg-transparent border-none outline-none text-[#ececec]"
					/>
					<button className="bg-[#605e68] rounded-[50%] border-none cursor-pointer p-2.5 flex items-center justify-center mr-5">
						<img src="/arrow.png" alt="arrow" className="size-4" />
					</button>
				</form>
			</div>
		</div>
	) : (
		<div>
			This page is protected, please <LoginLink>Login</LoginLink> to view it
		</div>
	);
};

export default DashboardPage;
