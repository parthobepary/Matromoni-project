import { combineReducers } from "@reduxjs/toolkit";
import AgentSlice from "./slices/AgentSlice";
import AuthSlices from "./slices/AuthSlice";
import BlogSlices from "./slices/BlogSlice";
import CourseSlices from "./slices/CourseSlice";
import FindPartnerSlice from "./slices/FindPartnerSlice";
import KaziSlice from "./slices/KaziSlice";
import LawyerSlice from "./slices/LawyerSlice";
import MembershipSlice from "./slices/MembershipSlice";
import ModalSlices from "./slices/ModalSlice";
import PostSlices from "./slices/PostSlices";
import ProfileSlices from "./slices/ProfileSlice";
import ShopSlices from "./slices/ShopSlices";
import SliderSlices from "./slices/SliderSlice";

export const combineReducer = combineReducers({
  shopValue: ShopSlices,
  blogValue: BlogSlices,
  courseValue: CourseSlices,
  modalValue: ModalSlices,
  sliderValue: SliderSlices,
  memberPackValue: MembershipSlice,
  authValue: AuthSlices,
  profileValue: ProfileSlices,
  kaziValue: KaziSlice,
  AgentValue: AgentSlice,
  LawyerValue: LawyerSlice,
  FindPartner:FindPartnerSlice,
  PostSlices: PostSlices
});

// export const masterReducer = (state,action)=>{
//     if(action.type === HYDRATE){
//         const nextState ={
//             ...state,
//             frontPage:{
//                 courses:[...state.frontPage.courses,...action.payload.frontPage.courses],
//                 products:[...state.frontPage.products,...action.payload.frontPage.products],
//             }

//         }
//         return nextState;
//     }else{
//         return combineReducer(state,action)
//     }
// }
