import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    togglesidebar:false,
}

const ToggleSidebarSlice = createSlice({
    name: "togglesidebar",
    initialState,
    reducers: {
        
        ToggleSidebarAction: (state)=>{
           
            state.togglesidebar = !state.togglesidebar;
            console.log("Toggle Confirm", state.togglesidebar)
        }
    }
});

export const {
    ToggleSidebarAction
} = ToggleSidebarSlice.actions

export const toggleState = (state) => state.toggleSidebar.togglesidebar;

export default ToggleSidebarSlice.reducer