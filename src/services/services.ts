import { RIMAC_API } from "../config";

export const callToRimacAPI = async (path: string, values: any) => {
    return await RIMAC_API.get(path).then(response => {
        if (response.status === 200) return response;
    }).catch(error => {
        return error;
    })
}