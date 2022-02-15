import   axios   from "axios";

export const apiClient= axios.create({});

export async function  loadCurrentDevice(){
    const {data: entityData}= await apiClient.get(`/api/current-device`);
    return entityData;
}

export async function loadRemotes(){
    const {data: arrayData}= await apiClient.get(`/api/remotes`);
    return arrayData;
}

export async function loadFolders(){
    const {data: arrayData}= await apiClient.get(`/api/folders`);
    return arrayData;
}

export async function fakeMessage(argv){
    const {data}= await apiClient.post(`/api/fake-message`,argv);
    return data;
}
