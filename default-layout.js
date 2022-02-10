import React from "react";
import { useMutation, useQuery } from "react-query"

export default function DefaultLayout({children}){
    const [fakeErrorQueryCounter,setFakeErrorQueryCounter] = React.useState(0);
    const queryKey=['fakeError',fakeErrorQueryCounter];
    const fakeErrorQuery=useQuery(queryKey,{enabled:fakeErrorQueryCounter>0});
    return <article className="defaultLayout--root">
<header className="defaultLayout--header">
<span className="defaultLayout--appName"   >
    #AppName</span> 
    <img className="defaultLayout--logo" src="/vercel.svg" width="100px" />
</header>
<section className="defaultLayout--contents">
{children}
</section>
<footer className="defaultLayout--footer">
    <ul>
        <li>Link#1</li>
        <li>Link#2</li>
        <li>Link#3</li>
        <li style={{flex:1}} /> 
        <li><button onClick={()=>setFakeErrorQueryCounter(i=>i+1)}>Fake Error</button></li>
        </ul> 
    </footer>
    </article>
}