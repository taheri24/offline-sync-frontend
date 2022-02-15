
export async function getCountFolders(){
    const {data: numberData}= await apiClient.get(`/folders/count`);
    return numberData;
}
export async function loadFolders(){
    const {data: arrayData}= await apiClient.get(`/folders/`);
    return arrayData;
}
