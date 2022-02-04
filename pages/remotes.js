import axios from "axios"
import { useQuery } from "react-query"

export default function Remotes(){
    const query=useQuery('remotesFetch',()=>axios.get(`/api/remotes`).then(r=>r.data))   
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>

 }