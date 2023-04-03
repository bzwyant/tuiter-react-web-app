import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuit-thunks";

const currentUser = {
	"userName": "NASA",
	"handle": "@nasa",
	"image": "nasa.png",
};

const templateTuit = {
	...currentUser,
	"topic": "Space",
	"time": "2h",
	"liked": false,
	"replies": 0,
	"retuits": 0,
	"likes": 0,
	"disliked": false,
	"dislikes": 0
}

const initialState = {
	tuits: [],
	loading: false
}

const tuitsSlice = createSlice({
	name: 'tuits',
	initialState,
	extraReducers: {
		[findTuitsThunk.pending]: (state) => {
			state.loading = true;
			state.tuits = [];
		},
		[findTuitsThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits = payload;
		},
		[findTuitsThunk.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error;
		},
		[deleteTuitThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits = state.tuits.filter(tuit => tuit._id !== payload);
		},
		[createTuitThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.tuits.push(payload)
		},
		[updateTuitThunk.fulfilled]: (state, { payload }) => {
			state.loading = false;
			const tuitIndex = state.tuits.findIndex((t) => t._id === payload._id);
			state.tuits[tuitIndex] = {
				...state.tuits[tuitIndex],
				...payload
			}
		}
	},
	reducers: {
		toggleLike(state, action) {
			const tuit = state.find(tuit => tuit._id === action.payload._id);
			tuit.liked = !tuit.liked;
			tuit.liked ? tuit.likes++ : tuit.likes--;
		},
		deleteTuit(state, action) {
			const index = state
				.findIndex(tuit =>
					tuit._id === action.payload);
			state.splice(index, 1);
		},
		createTuit(state, action) {
			state.unshift({
				...action.payload,
				...templateTuit,
				_id: (new Date()).getTime(),
			})
		}
	}
});

export const {createTuit, deleteTuit, toggleLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;