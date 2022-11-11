import membershipService from "../../../api/MembershipService";
import { MembershipSlice } from "../../slices/MembershipSlice";
// import { shopSlice } from "../slices/shopSlice";
const { actions: slice } = MembershipSlice;

export const memberShipAction = () => async (dispatch) => {
  let data;
  try {
    const res = await membershipService.membershipPackList();
    // console.log("calling from action");
    if (res.status == 200) {
      data = res.data.data ?? [];
      dispatch(slice.getAllMembershipPack(data));
    } else {
      dispatch(slice.getMembershipError(res));
    }
  } catch (err) {
    dispatch(slice.getMembershipError(err));
  }
};
