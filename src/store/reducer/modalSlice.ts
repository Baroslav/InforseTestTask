import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ModalState {
    addOpen: boolean,
    deleteOpen : boolean,
    editOpen : boolean,
    deletedId : any

}

const  initialState:ModalState = {
    addOpen: false,
    deleteOpen : false,
    editOpen : false,
    deletedId : 1
}

export const modalSlice = createSlice({
    name:"modal" ,
    initialState,
    reducers: {
        setAddOpen (state) {
            state.addOpen = true
        },
        setDeleteOpen (state) {
            state.deleteOpen = true
        },
        setEditOpen (state) {
            state.editOpen = true
        },
        setAddClose (state) {
            state.addOpen = false
        },
        setDeleteClose (state) {
            state.deleteOpen= false
        },
        setEditClose (state) {
            state.editOpen = false
        },
        setDeletedId (state ,action : PayloadAction<any>) {
            state.deletedId = action.payload
        }
    }
})

export default modalSlice.reducer;
export const { setAddOpen } = modalSlice.actions;
export const { setDeleteOpen} = modalSlice.actions;
export const { setEditOpen } = modalSlice.actions;
export const {  setAddClose } = modalSlice.actions;
export const { setDeleteClose } = modalSlice.actions;
export const { setEditClose } = modalSlice.actions;
export const { setDeletedId } = modalSlice.actions