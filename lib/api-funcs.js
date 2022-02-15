import   axios   from "axios";

export const apiClient= axios.create({
    baseURL:`/api`
});

export async function  loadCurrentDevice(){
    const {data: entityData}= await apiClient.get(`/current-device`);
    return entityData;
}

export async function loadRemotes(){
    const {data: arrayData}= await apiClient.get(`/remotes`);
    return arrayData;
}

export async function loadFolders(){
    const {data: arrayData}= await apiClient.get(`/folders`);
    return arrayData;
}

export async function fakeMessage(argv){
    const {data}= await apiClient.post(`/fake-message`,argv);
    return data;
}
