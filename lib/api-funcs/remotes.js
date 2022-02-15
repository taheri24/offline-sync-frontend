import { apiClient } from "./api-client";

export async function loadRemotes(){
    const {data: arrayData}= await apiClient.get(`/remotes`);
    return arrayData;
}
export async function getCountRemotes(){
    const {data: numberData}= await apiClient.get(`/remotes/count`);
    return numberData;
}
