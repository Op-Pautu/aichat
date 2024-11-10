import { ChatList } from "@/components/chat-list";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div id="dashboardLayout" className="flex gap-[50px] pt-5 h-full">
			<div id="menu" className="flex-1">
				<ChatList />
			</div>

			<div id="content" className="flex-[4] bg-[#12101b]">
				{children}
			</div>
		</div>
	);
};

export default DashboardLayout;
