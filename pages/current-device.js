import axios from "axios"
import { useQuery } from "react-query"
import { JsonView } from "./_components";
export default function CurrentDevice() {
    const query = useQuery('currentDevice');
    const {data} = query;
    return <>
            <JsonView query={query} />  
        <div className="readOnlyField">
            <h3 className="label">DeviceId</h3>
            <input type="text" value={data?.deviceId} />
        </div>
    </>

}