import { QueryClient } from "react-query"

export class SharedQueryClient extends QueryClient{
    static instanceId=+new Date();
    /**
     * @type {Record<string,SharedQueryClient>}
     */
    static instances={};
    /**
     * 
     * @param {import("react-query").QueryClientConfig} config 
     */
    constructor(config) {
        const instanceId= SharedQueryClient.instanceId++;
        config.defaultOptions=config.defaultOptions || {};
        config.defaultOptions.queries=config.defaultOptions.queries || {};
        Object.assign(  config.defaultOptions.queries,{
                retry:false,
                refetchOnMount:false,
                refetchOnWindowFocus:false,
                queryFn(...args){  
                    const cli=  SharedQueryClient.instances[instanceId];
                    return cli.queryFn(...args);
         
            }
        });
        super(config );
        SharedQueryClient.instances[instanceId]=this;
        /**
         * @type {Record<string,QueryFunction>}
         */
        this.queryFuncs=config.queryFuncs || {}
    }
    queryFn({queryKey,...rest},...args){
        queryKey = Array.isArray(queryKey) ? queryKey : [queryKey];
        const [queryName] = queryKey;
        const queryFunc =  this.queryFuncs[queryName];
        if(!(queryFunc instanceof Function) ){
            alert('sdf');
            throw new Error(`Invalid QueryKey`);
        }
        return  queryFunc({queryKey,...rest},...args);
         
    }
} 