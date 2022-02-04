import axios from "axios"
import { useQuery } from "react-query"

export default function Folders(){
    const query=useQuery('foldersFetch',()=>axios.get(`/api/folders`).then(r=>r.data))   
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>
}