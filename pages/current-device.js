import axios from "axios"
import { useQuery } from "react-query"
export default function CurrentDevice() {
    const query = useQuery('loadCurrentDevice');
    const {data} = query;
    return <>
               
        <div className="readOnlyField">
            <h3 className="label">DeviceId</h3>
            <input type="text" value={data?.deviceId} />
        </div>
        <div className="readOnlyField">
            <h3 className="label">ComputerName</h3>
            <input type="text" value={data?.computerName} />
        </div>
        <div className="readOnlyField" style={{flexDirection: 'column'}}>
            <h3 className="label">Network IPs</h3>
           {data?.networkIPs?.map(networkIP=>(   <input type="text" value={networkIP} />))}    
        </div>

    </>

}