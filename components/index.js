export function JsonView(p){
    const data=p.data || p.query?.data;
    return         <pre>
    {JSON.stringify(data, null, 4)}
</pre>

}