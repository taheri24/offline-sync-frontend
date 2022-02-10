import { useQuery } from "react-query"

export default function Folders(){
    const query=useQuery('folders');   
    return <>
    <pre>
        {JSON.stringify(query.data,null,4)}
    </pre>
    </>
}