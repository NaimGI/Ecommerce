import { loginStart, loginFailure, loginSuccess } from "./UserRedux";
import { publicRequest } from "../request";

export const login = async (dipatch, user) => {
  dipatch(loginStart());
  try {
    console.log(user);
    const res = await publicRequest.post("/auth/Login", user);
    console.log(res.data);
    dipatch(loginSuccess(res.data));
  } catch (err) {
    dipatch(loginFailure(err));
  }
};
