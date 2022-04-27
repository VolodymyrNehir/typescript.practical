import {axiosService} from "./axios.service";
import {urls}  from "../Constants/urls"
import {IUser} from "../Interfaces";

export const UserService = {
  allUsers: ()=> axiosService.get<IUser[]>(urls.users)
}