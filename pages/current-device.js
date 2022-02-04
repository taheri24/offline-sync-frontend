import axios from "axios"
import { useQuery } from "react-query"

export default function CurrentDevice(){
    const query=useQuery('currentDevice',()=>axios.get(`/api/current-device`).then(r=>r.data))   
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>

}