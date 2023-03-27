import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
	const whoArray = useSelector((state) => state.who)
	return (
		<ul className="list-group">
			<li className="list-group-item">
				<h4 className="fw-bolder align-items-center">Who to follow</h4>
			</li>
			{
				whoArray.map(who => <WhoToFollowListItem key={who._id} who={who}/>)
			}
		</ul>
	);
};

export default WhoToFollowList