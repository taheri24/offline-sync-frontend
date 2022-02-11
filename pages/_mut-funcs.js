import { httpClient } from "./_query-funcs";

export async function fakeMessage(argv){
    const {data}= await httpClient.post(`/api/fake-message`,argv);
    return data;
}
