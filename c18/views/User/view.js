import {line} from "../../main2.js";


export default function login(user) {
    line()
    console.log(`welcome, ${user.userName}. Your access level is : ${user.role.toUpperCase()}`);
}