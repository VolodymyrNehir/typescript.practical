import {FC} from 'react';
import {IUser} from "../../Interfaces";

interface users {
user: IUser
}
const User:FC<users> = ({user:{name,id,usermane}}) => {
    return (
        <div>
          <h1>{name}</h1>
        </div>
    );
};

export {User};