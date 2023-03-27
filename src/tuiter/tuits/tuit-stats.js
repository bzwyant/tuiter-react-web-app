import React from "react";
import {useDispatch} from "react-redux";
import {toggleLike} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
	const dispatch = useDispatch();
	const toggleLikeHandler = (index) => {
		dispatch(toggleLike(index))
	}
	return(
		<div className="d-flex align-content-start justify-content-between mt-3">
			<div>
				<i className="bi bi-chat me-1"></i>
				{tuit.replies}
			</div>
			<div>
				<i className="bi bi-arrow-repeat me-1"></i>
				{tuit.retuits}
			</div>
			<div>
				<button onClick={() => toggleLikeHandler(tuit)} className="border-0 bg-transparent">
					{tuit.liked ? <i className="bi bi-heart-fill" style={{color: "red"}}></i> :
						<i className="bi bi-heart"></i>}
				</button>
				{tuit.likes}
			</div>
			<div>
				<i className="bi bi-share"></i>
			</div>
		</div>
	);
};

export default TuitStats;