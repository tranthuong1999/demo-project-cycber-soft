import axios from "axios";
import { get } from "../utils/request";

export const apiGetSession = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.data;
        });
    console.log("data", data)
    return data;
}
