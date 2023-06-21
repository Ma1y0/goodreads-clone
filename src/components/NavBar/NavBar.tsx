import Link from "next/link";
import AuthCheck from "../AuthCheck";
import { SignInButton, SignOutButton } from "./AuthButtons";
import NavSearch from "./NavSearch";

export default function NavBar() {
	return (
		<nav className="navbar bg-base-100">
			<div className="flex-1">
				<Link href={"/"} className="btn btn-ghost normal-case text-xl">
					Goodreads
				</Link>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<NavSearch />
				</div>

				<div>
					<SignInButton />
				</div>
				<div>
					<AuthCheck>
						<SignOutButton />
					</AuthCheck>
				</div>

				{/* <div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full"></div>
					</label>
					<ul
						tabIndex={0}
						className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div> */}
			</div>
		</nav>
	);
}
