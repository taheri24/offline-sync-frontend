import React from "react";
import { useMutation, useQuery } from "react-query"

export default function DefaultLayout({children}){
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
        <li> <FakeMessageButton caption="FakeError"/>{' '}<FakeMessageButton success caption="SuccessMessage"/> </li>
        </ul> 
    </footer>
    </article>
}
function FakeMessageButton({caption,success}){
    const {mutate}= useMutation('fakeMessage');
    return <button onClick={()=>mutate({success})}>{caption}</button>;
}
