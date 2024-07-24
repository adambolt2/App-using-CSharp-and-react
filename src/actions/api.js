import axios from "axios";
import { dCandidate } from "../reducers/Dcandidate";
import { fetchAll } from "./dCandidate";

const baseURL = "http://localhost:5151/api/"

export const api = {
    dCandidate(url = baseURL + 'dCandidate/') {
        return {
        fetchAll : () => axios.get(url),
        fetchByID : (id) => axios.get(url+id),
        create : NewRecord => axios.post(url,NewRecord),
        update : (id, updateRecord) => axios.put(url+id,updateRecord),
        delete: id => axios.delete(url+id)
        }
    }
}