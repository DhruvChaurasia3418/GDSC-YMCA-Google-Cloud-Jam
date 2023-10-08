import { React } from "react";

const NavBar = () => {
	return (
		<nav className="fixed navbar navbar-expand-lg navbar-light bg-light w-full z-50">
			<div className="container-fluid">
				<a href="https://gdsc.community.dev/j-c-bose-university-of-science-and-technology-faridabad/">
					<img
						className="d-inline-block align-text-top"
						src={require("../assets/GDSC J.C. Bose University of Science & Technology, YMCA Horizontal color.png")}
						alt="GDSC NFSU logo"
					/>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
