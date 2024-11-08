import {
	getKindeServerSession,
	LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
	const { isAuthenticated } = getKindeServerSession();
	return (await isAuthenticated()) ? (
		<div>Dashboard Page</div>
	) : (
		<div>
			This page is protected, please <LoginLink>Login</LoginLink> to view it
		</div>
	);
};

export default DashboardPage;
