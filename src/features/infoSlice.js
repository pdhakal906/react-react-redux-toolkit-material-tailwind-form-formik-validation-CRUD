import { createSlice } from "@reduxjs/toolkit";
import { crudInfo, getInfos } from "./storage";


const infoSlice = createSlice({
  name: 'infoSlice',
  initialState: {
    infos: getInfos()
  },
  reducers: {

    addInfo: (state, action) => {
      state.infos.push(action.payload)
      crudInfo(state.infos)
    },

    updateInfo: (state, action) => {
      state.infos = state.infos.map((info) => action.payload.id === info.id ? action.payload : info);
      crudInfo(state.infos)
    },

    deleteInfo: (state, action) => {
      state.infos = state.infos.filter((info) => info.id !== action.payload);
      crudInfo(state.infos);
    }


  }
})
export const { addInfo, updateInfo, deleteInfo } = infoSlice.actions
export default infoSlice.reducer;