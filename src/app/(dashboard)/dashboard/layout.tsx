import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div id="dashboardLayout">
			<div id="menu">menu</div>

			<div id="content">{children}</div>
		</div>
	);
};

export default DashboardLayout;
