import { Mutation, MutationCache, QueryClient } from "react-query"

export class SharedQueryClient extends QueryClient{
    static instanceIdCounter=+new Date();
    /**
     * @type {Record<string,SharedQueryClient>}
     */
    static instances={};
    /** @type {import('react-query').Mutation} */
    static currentMutation;
    /**
     * 
     * @param {import("react-query").QueryClientConfig} config 
     */
    constructor(config) {
        const instanceId= SharedQueryClient.instanceIdCounter++;
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
        config.defaultOptions.mutations=config.defaultOptions.mutations || {};
        Object.assign(   config.defaultOptions.mutations,{
            mutationFn(input){
                const mutationKey = SharedQueryClient.currentMutation?.options?.mutationKey || [];
                const [mutationName]=Array.isArray(mutationKey) ?  mutationKey :  [mutationKey];
                if(!mutationName) throw new Error(`mutationName(mutationKey) is Invalid`);
                const cli=  SharedQueryClient.instances[instanceId];
                const fn= cli.mutationFuncs[mutationName];
                if(!(fn instanceof Function))  throw new Error(`mutationFn is not a function`);
                return fn(input);
            }
        });
        super(config );
        this.instanceId=instanceId;
        SharedQueryClient.instances[instanceId]=this;
        /**
         * @type {Record<string,QueryFunction>}
         */
        this.queryFuncs=config.queryFuncs || {};

        /**
         * @type {Record<string,import("react-query").MutationFunction>}
         */
         this.mutationFuncs=config.mutationFuncs || {};

    }
    queryFn({queryKey,...rest},...args){
        queryKey = Array.isArray(queryKey) ? queryKey : [queryKey];
        const [queryName] = queryKey;
        const queryFunc =  this.queryFuncs[queryName];
        if(!(queryFunc instanceof Function) ){
             throw new Error(`Invalid QueryKey`);
        }
        return  queryFunc({queryKey,...rest},...args);
         
    }
    getMutationCache(){
        const resultMutationCache=super.getMutationCache();
        if(!resultMutationCache.injected){ 
            resultMutationCache.injected=true;
            const _build=resultMutationCache.build.bind(resultMutationCache);
            resultMutationCache.build=(...args)=>{                 
                const mutation= _build(...args);
                const _execute=mutation.execute.bind(mutation);
                mutation.execute=function(...args){
                    SharedQueryClient.currentMutation=this;
                    return _execute(...args);
                }
                mutation.execute=mutation.execute.bind(mutation);
                return mutation;
            }
        }       
        return resultMutationCache;
    }
} 