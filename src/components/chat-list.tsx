import Link from "next/link";

export const ChatList = () => {
	return (
		<div className="flex flex-col h-full">
			<span className="font-semibold text-[10px] mb-2.5">DASHBOARD</span>
			<Link href={"/dashboard"}>Create a new chat</Link>
			<Link href={"/"}>Explore OP AI</Link>
			<Link href={"/"}>Contact</Link>
			<hr className="border-none h-[2px] bg-[#ddd] opacity-[0.1] rounded-[5px] my-5" />
			<span className="font-semibold text-[10px] mb-2.5">RECENT CHATS</span>

			<div className="flex flex-col overflow-y-scroll ">
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
				<Link href={"/"} className="p-2.5 rounded-[10px] hover:bg-[#2c2937]">
					My chat title{" "}
				</Link>
			</div>
			<hr className="border-none h-[2px] bg-[#ddd] opacity-[0.1] rounded-[5px] my-5" />
			<div className="mt-auto flex items-center gap-2.5 text-xs">
				<img src="/logo.png" alt="logo" className="size-6" />
				<div className="flex flex-col">
					<span className="font-semibold">Upgrade to Op AI Pro</span>
					<span className="text-[#888]">
						Get unlimited access to all features
					</span>
				</div>
			</div>
		</div>
	);
};
