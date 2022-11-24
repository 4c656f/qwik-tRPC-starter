import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";


export default component$(()=>{
    return(
        <div>
            <Link
                href={'/'}>
                <h1>Go home</h1>
            </Link>
            <h2>SomeRoute</h2>
        </div>
    )
})