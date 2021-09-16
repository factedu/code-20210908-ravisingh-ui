import axios from "axios";
import { User } from "../interfaces";

export async function getAllUsers():Promise<User[]>{
    let data:User[]=[];
    let res;
    try {
        res = await axios.get('https://code-20210908-ravisingh.herokuapp.com/api/reports/')
    } catch (error) {
        console.log(error)
        throw new Error('unable to load data');
    }
    if(res){
        data = res.data as User[];
    }
    return data;
}