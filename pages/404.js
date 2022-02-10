import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oepsie...</h1>
            <h2>Die pagina kan niet gevonden worden of bestaat niet</h2>
            <p>Je gaat terug naar de <Link href="/"><a>Hompagina</a></Link> in 5 seconden</p>
        </div>
    );
}
 
export default NotFound;