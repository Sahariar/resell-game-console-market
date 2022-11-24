import React, { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Logo from "./Logo";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const category = useLoaderData();
	

	const navList = <>
	<li>
	<NavLink to={"/home"} className={'rounded-xl'}> Home</NavLink>
	</li>
	{ 
	category.length > 0 && 
		category.map( cate => <li key={cate._id}>
			<NavLink to={`/product/category/${cate._id}`} className={'rounded-xl'}> {cate.category}</NavLink>
			</li> )
	}
	<li>
	<NavLink to={"/blog"} className={'rounded-xl'}> Blog</NavLink>
	</li>
	{
		user?.email &&
	<li>
	<NavLink to={"/dashboard"} className={'rounded-xl'}> Dashboard</NavLink>
	</li>
	}

							
							</>
	return (
		<header className="header-area  bg-base-100">
			<div className="container mx-auto navbar">
				<div className="navbar-start">
					<div className="dropdown lg:hidden">
						<label tabIndex={0} className="btn btn-ghost ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navList}
						</ul>
						
					</div>
					<Logo></Logo>
				</div>
				<div className="navbar-end">
					{user?.email ? (
						<div className="flex">
					<div onClick={handleLogOut} className="btn btn-primary text-white">
									<Link>Logout</Link>
					</div>
						</div>
					) : (
						<div className="flex">
							
						<div className="auth-area">
							<Link to={"/login"}>
								<span className="btn btn-primary text-white"> Login</span>
							</Link>
						</div>
						</div>
					)
                
                
                }
				</div>
			</div>
			<div className="divider divide-slate-50 my-0"></div>
			<div className="container mx-auto navbar pt-0 items-center justify-center hidden lg:flex">
				<div className="navbar-center">
				<ul className="menu menu-horizontal p-0 pr-2">
						{navList}
				</ul>
				</div>
			</div>

		</header>
	);
};

export default Header;
