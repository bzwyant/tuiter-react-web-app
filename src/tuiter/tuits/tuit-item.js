import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuit-thunks.js";
import TuitStats from "./tuit-stats";
const TuitItem = ({tuit}) => {
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuitThunk(id))
	}
	return(
		<li className="list-group-item">
			<div className="row">
				<div className="col-auto">
					<img alt="profile" width={50} className="float-end rounded-circle"
					     src={`/images/${tuit.image}`}/>
				</div>
				<div className="col-10">
					<span className="fw-bolder">{tuit.userName}</span>
					<i className="bi bi-x-lg float-end"
					   onClick={() => deleteTuitHandler(tuit._id)}></i>
					<span className="fw-normal">
						<i className="bi bi-check-circle-fill mx-1"></i>
						{tuit.handle} - {tuit.time}
					</span><br/>
					{tuit.tuit}
					<TuitStats tuit={tuit}/>
				</div>
			</div>
		</li>
	);
};
export default TuitItem;