import   axios   from "axios";

export const httpClient= axios.create({});

export async function  loadCurrentDevice(){
    const {data: entityData}= await httpClient.get(`/api/current-device`);
    return entityData;
}

export async function loadRemotes(){
    const {data: arrayData}= await httpClient.get(`/api/remotes`);
    return arrayData;
}

export async function loadFolders(){
    const {data: arrayData}= await httpClient.get(`/api/folders`);
    return arrayData;
}

export async function fakeMessage(argv){
    const {data}= await httpClient.post(`/api/fake-message`,argv);
    return data;
}
