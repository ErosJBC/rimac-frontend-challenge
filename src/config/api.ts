import axios from "axios";
import { URL_BASE } from "../constants";

export const RIMAC_API = axios.create({
    baseURL: URL_BASE,
    headers: {
        "Content-Type": "application/json"
    }
});
