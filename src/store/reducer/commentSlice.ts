import { PayloadAction , createSlice } from "@reduxjs/toolkit";

interface CommentState {
    commentAdd : boolean
}

const initialState:CommentState = {
    commentAdd : false
}

export const commentSlice = createSlice({
    name : "comment",
    initialState,
    reducers : {
        addComment(state ) {
            state.commentAdd = !state.commentAdd
        }
    }
})


export default commentSlice.reducer
export const {addComment} = commentSlice.actions