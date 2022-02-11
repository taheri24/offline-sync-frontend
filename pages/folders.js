import { useQuery } from "react-query"

export default function Folders(){
    const query=useQuery('loadFolders');   
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>
}