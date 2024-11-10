"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
	const [typingStatus, setTypingStatus] = useState("human1");

	return (
		<div className="flex items-center gap-[100px] h-full">
			<img
				src="/orbital.png"
				alt=""
				className="animate-rotateOrbital absolute bottom-0 left-0 opacity-[0.05]"
			/>
			<div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
				<h1 className="text-[7.5rem] bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-transparent">
					OP AI
				</h1>
				<h2 className="text-2xl font-semibold">
					Supercharge your creativity and productivity
				</h2>
				<h3 className="text-lg font-normal text-balance">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
					dolorem doloribus, architecto dolor.
				</h3>
				<Link
					href="/dashboard"
					className="py-[15px] px-[25px] text-white rounded-[20px] text-sm bg-[#217bfe] mt-5 hover:bg-white hover:text-[#217bfe]"
				>
					Get Started
				</Link>
			</div>
			<div className="flex-1 flex items-center justify-center h-full">
				<div className="flex items-center justify-center bg-[#140e2d] rounded-[50px] w-[80%] h-[50%] relative">
					<div className="size-full overflow-hidden absolute top-0 left-0 rounded-[50%]">
						<div
							className="opacity-[0.2] h-full w-[200%] animate-slideBg"
							style={{
								backgroundImage: `url("/bg.png")`,
								backgroundSize: "auto 100%",
							}}
						></div>
					</div>
					<img
						src="/bot.png"
						alt=""
						className="size-full object-contain animate-botAnimate"
					/>
				</div>
			</div>
			<div className="terms">
				<img src="/logo.png" alt="" />
				<div className="links">
					<Link href="/">Terms of Service</Link>
					<span>|</span>
					<Link href="/">Privacy Policy</Link>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
