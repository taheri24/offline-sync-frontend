import { apiClient } from "./api-client";

export async function  loadCurrentDevice(){
    const {data: objectData}= await apiClient.get(`/current-device`);
    return objectData;
}

