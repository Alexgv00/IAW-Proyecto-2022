import React, { useEffect, useState } from 'react'
import UserContext from "./UserContext";
import UserService from "../services/UsersService.js"

const UserState = (props) => {
    const userInit = {
        nickname:"loading",
        password: "loading",
        email: "loading",
        avatar: "loading",
        role: "loading"
    };
    const [user, setUser] = useState(userInit)

    const getUser = async () => {
        // const response = await fetch('/data/user.json');
        // const data = await response.json();
        
        // console.log(userStorage.user);
        if (localStorage.length == 0) {
           return user
        } else {
            const saved = localStorage.getItem("userSession")
            const userStorage = JSON.parse(saved)
            UserService.getUserById(userStorage.user._id).then(data=> 
            setUser({
                    ...user,
                    nickname: data.nickname,
                    password: data.password,
                    email: data.email,
                    avatar: data.avatar,
                    role: data.role
                })
            )
        }   
    }

    useEffect(() => {
        getUser();
    }, [])



    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState