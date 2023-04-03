import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuit-thunks";

const TuitStats = ({tuit}) => {
	const dispatch = useDispatch();
	return(
		<div className="d-flex align-content-start justify-content-between mt-3">
			<div>
				<i className="bi bi-chat me-2"></i>
				{tuit.replies}
			</div>
			<div>
				<i className="bi bi-arrow-repeat me-2"></i>
				{tuit.retuits}
			</div>
			<div>
				<i onClick={() => dispatch(updateTuitThunk({
					...tuit, likes: (tuit.liked ? tuit.likes - 1 : tuit.likes + 1), liked: !tuit.liked
				}))} className={tuit.liked ? "bi bi-heart-fill text-danger me-2" : "bi bi-heart me-2"}></i>
				{tuit.likes}
			</div>
			<div>
				<i onClick={() => dispatch(updateTuitThunk({
					...tuit, dislikes: (tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1), disliked: !tuit.disliked
				}))} className={tuit.disliked ? "bi bi-hand-thumbs-down-fill text-primary me-2" : "bi bi-hand-thumbs-down me-2"}></i>
				{tuit.dislikes}
			</div>
			<div>
				<i className="bi bi-share"></i>
			</div>
		</div>
	);
};

export default TuitStats;