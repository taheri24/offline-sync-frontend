import { useQuery } from "react-query"

export default function Remotes(){
    const query=useQuery('loadRemotes');
    const countQuery=useQuery('loadRemotes');
       
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>

 }