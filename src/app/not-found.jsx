import Link from "next/link";


const NotFound = () => {
    return ( 
        <><h2>
            Not found
        </h2><p> try again</p>
        <Link href="/">Return home </Link>
        </>
     );
}
 
export default NotFound;