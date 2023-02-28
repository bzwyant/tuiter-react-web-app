import React from "react";

const NavigationSidebar = (
	{
		active = 'explore'
	}
) => {
	return (
		<>
			<div className="list-group">
				<a className="list-group-item" href="/">
					<i className="bi bi-twitter"></i>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'home'?'active':''}`}>
					<i className="bi bi-house-door-fill align-self-center me-2"></i>
					<span className="d-none d-xl-block align-self-center">Home</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'explore'?'active':''}`}>
					<i className="bi bi-hash align-self-center me-2"></i>
					<span className="d-none d-xl-block">Explore</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'notifications'?'active':''}`}>
					<i className="bi bi-bell-fill align-self-center me-2"></i>
					<span className="d-none d-xl-block">Notifications</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'messages'?'active':''}`}>
					<i className="bi bi-envelope-fill align-self-center me-2"></i>
					<span className="d-none d-xl-block">Messages</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'bookmarks'?'active':''}`}>
					<i className="bi bi-bookmark-fill align-self-center me-2"></i>
					<span className="d-none d-xl-block">Bookmarks</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'lists'?'active':''}`}>
					<i className="bi bi-list-ul align-self-center me-2"></i>
					<span className="d-none d-xl-block">Lists</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'profile'?'active':''}`}>
					<i className="bi bi-person-fill align-self-center me-2"></i>
					<span className="d-none d-xl-block">Profile</span>
				</a>
				<a className={`list-group-item d-flex
	                    ${active === 'more'?'active':''}`}>
					<i className="bi bi-three-dots align-self-center me-2"></i>
					<span className="d-none d-xl-block">More</span>
				</a>
			</div>
			<div className="d-grid mt-2">
				<a className="btn btn-primary btn-block rounded-pill">Tweet</a>
			</div>
		</>
	);
};
export default NavigationSidebar;