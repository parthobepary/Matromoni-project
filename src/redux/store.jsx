import apiSlice from "./api/apiSlice";
import AgentSlice from "./slices/AgentSlice";
import AuthSlices from "./slices/AuthSlice";
import BlogSlice from "./slices/BlogSlice";
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

const { configureStore } = require("@reduxjs/toolkit");

export const store = () => configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    shopValue: ShopSlices,
    blogValue: BlogSlice,
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
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }).concat(apiSlice.middleware),
})

// const store = createStore(()=>[], {}, applyMiddleware());

// devTools: process.env.NODE_ENV !== "production",


