"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
	const [typingStatus, setTypingStatus] = useState("human1");

	return (
		<div className="flex flex-col lg:flex-row gap-0	  items-center lg:gap-[100px] h-full">
			<img
				src="/orbital.png"
				alt=""
				className="animate-rotateOrbital absolute bottom-0 left-0 opacity-[0.05]"
			/>
			<div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
				<h1 className="text-[4rem] xl:text-[7.5rem] bg-gradient-to-r from-[#217bfe] to-[#e55571] bg-clip-text text-transparent">
					OP AI
				</h1>
				<h2 className="text-2xl font-semibold">
					Supercharge your creativity and productivity
				</h2>
				<h3 className="text-lg leading-[1] font-normal text-balance">
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
					<div className="absolute bottom-[-30px] hidden  xl:right-[-50px] right-0 lg:flex items-center gap-2.5 p-5 bg-[#2c2937] rounded-[10px]">
						<img
							src={
								typingStatus === "human1"
									? "/human1.jpeg"
									: typingStatus === "human2"
									? "/human2.jpeg"
									: "bot.png"
							}
							alt="image"
							className="size-8 rounded-[50%] object-cover"
						/>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"Human:We produce food for Mice",
								2000,
								() => {
									setTypingStatus("bot");
								},
								"Bot:We produce food for Hamsters",
								2000,
								() => {
									setTypingStatus("human2");
								},
								"Human2:We produce food for Guinea Pigs",
								2000,
								() => {
									setTypingStatus("bot");
								},
								"Bot:We produce food for Chinchillas",
								2000,
								() => {
									setTypingStatus("human1");
								},
							]}
							wrapper="span"
							repeat={Infinity}
							cursor={true}
							omitDeletionAnimation={true}
						/>
					</div>
				</div>
			</div>
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
				<img src="/logo.png" alt="logo" className="size-7" />
				<div className="flex gap-2.5 text-[#888] text-xs">
					<Link href="/">Terms of Service</Link>
					<span>|</span>
					<Link href="/">Privacy Policy</Link>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
