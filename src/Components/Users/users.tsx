import {FC, useEffect, useState} from 'react';

import {IUser} from "../../Interfaces";
import {UserService} from "../../Services/user.service";

const Users: FC = () => {
    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        (async ()=>{
         const {data} =  await UserService.allUsers();
            setUsers(data)
        })()
    },[]);

    return (
        <div>
            helll
            {
                users.map(user => <user id={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};