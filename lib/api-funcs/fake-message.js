import { apiClient } from "./api-client";

export async function fakeMessage(argv){
    const {data}= await apiClient.post(`/fake-message`,argv);
    return data;
}
