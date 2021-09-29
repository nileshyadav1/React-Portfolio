import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    LightMode:false,
}

const ToggleThemeSlice = createSlice({
    name: "toggletheme",
    initialState,
    reducers: {
        
        ToggleLightModeAction: (state)=>{
           
            state.LightMode = !state.LightMode;
            console.log("Theme State", state.LightMode)
        }
    }
});

export const {
    ToggleLightModeAction
} = ToggleThemeSlice.actions

export const isLightMode = (state) => state.toggleTheme.LightMode;

export default ToggleThemeSlice.reducer