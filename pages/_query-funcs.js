import   axios   from "axios";

const httpClient= axios.create({

    
});

export async function  currentDevice(){
    const {data}= await httpClient.get(`/api/current-device`);
    return data;
}

export async function remotes(){
    const {data}= await httpClient.get(`/api/remotes`);
    return data;
}
export async function fakeError(){
    const {data}= await httpClient.get(`/api/fake-error`);
    return data;
}

export async function folders(){
    const {data}= await httpClient.get(`/api/folders`);
    return data;
}
