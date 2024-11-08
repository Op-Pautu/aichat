import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
	getKindeServerSession,
	LoginLink,
	LogoutLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
	const { isAuthenticated, getUser } = getKindeServerSession();
	const user = await getUser();
	return (
		<header className="flex items-center justify-between">
			<Link href={"/"} className="flex items-center font-bold gap-2">
				<Image
					src="/logo.png"
					alt="logo"
					width={50}
					height={50}
					className="size-8"
				/>
				<span>Op Ai</span>
			</Link>
			<div>
				{!(await isAuthenticated()) ? (
					<>
						<LoginLink className="btn btn-ghost sign-in-btn">Sign in</LoginLink>
						<RegisterLink className="btn btn-dark">Sign up</RegisterLink>
					</>
				) : (
					<div className="profile-blob">
						{user?.picture ? (
							<img
								className="avatar"
								src={user?.picture}
								alt="user profile avatar"
								referrerPolicy="no-referrer"
							/>
						) : (
							<div className="avatar text-black">
								{user?.given_name?.[0]}
								{user?.family_name?.[0]}
							</div>
						)}
						<div>
							<p className="text-heading-2 ">
								{user?.given_name} {user?.family_name}
							</p>

							<LogoutLink className="text-subtle">Log out</LogoutLink>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
