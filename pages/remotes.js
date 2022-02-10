import axios from "axios"
import { useQuery } from "react-query"

export default function Remotes(){
    const query=useQuery('remotes');
       
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>

 }