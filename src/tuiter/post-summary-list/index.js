import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuit-thunks";


const PostSummaryList = () => {
	const {tuits, loading} = useSelector(state => state.tuitsData)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findTuitsThunk())
	}, [dispatch])

	return(
		<ul className="list-group">
			{
				loading &&
				<li className="list-group-item">
					Loading...
				</li>
			}
			{
				tuits.map(post =>
					<PostSummaryItem
						key={post._id} post={post}/> )
			}
		</ul>
	);
};
export default PostSummaryList;