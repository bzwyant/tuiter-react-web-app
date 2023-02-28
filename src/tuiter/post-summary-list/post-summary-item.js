import React from "react";
const PostSummaryItem = (
	{
		post = {
			topic: "Space",
			userName: "SpaceX",
			time: "2h",
			title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
			image: "tesla.png"
		}
	}
) => {
	return(
		<li className="list-group-item d-flex justify-content-between">
			<div>
				<span className="text-secondary">{post.topic}</span>
				<div className="fw-bolder">
					{post.userName}
					<i className="bi bi-check-circle-fill m-1"></i>
					<span className="fw-normal text-secondary">- {post.time}</span>
				</div>
				<div className="fw-bold">{post.title}</div>
				<span className="text-secondary">{post.tweets}{post.tweets === "" ? "" : " Tweets"}</span>
			</div>
			<div className="col-2">
				<img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
			</div>
		</li>
	);
};
export default PostSummaryItem;