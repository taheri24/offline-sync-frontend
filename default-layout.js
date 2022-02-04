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
        
        </ul> 
    </footer>
    </article>
}