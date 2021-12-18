import axios from "axios";

export const checkboxApi = {
   create(checkbox:boolean) {
       const promise = axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkbox})
       return promise
   }
}