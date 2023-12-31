import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const userSlice = createSlice({
  name: "users",
  initialState: { data },
  reducers: {
    adduser: (state, action) => {
      console.log(action);
   
      state.data.push(action.payload);
    
    },
    edituser:(state,action)=>{
      console.log(action);
      const {id,name,age}=action.payload
const edit=  state.data.find((item)=>item.id==id)
if(edit){
  edit.name=name;
  edit.age=age;
}
    },
    deleteuser:(state,action)=>{
      const { id } = action.payload;
      const updatedData = state.data.filter((item) => item.id !== id);
      return { ...state, data: updatedData };
    }
  },
});

export const { adduser,edituser,deleteuser } = userSlice.actions;
export default userSlice.reducer;
