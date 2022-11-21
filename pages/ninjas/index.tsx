import styles from "../../styles/Ninjas.module.css"
import Link from "next/link";
// this function runs at build time
// runs as our app is built
// runs as our components are rendered
export const getStaticProps = async ()=>{
    // fetch request
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // we return a value to use the 
    // data in our component
    return {
        // set ninja equals to data
        props: {ninjas : data} 
    }
}
// destructor ninjas from props
const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            <h2>Updating!!!</h2>
            {/* map through the ninjas */}
            {ninjas.map(ninja => (
                <Link href={"/ninjas/"+ninja.id} key={ninja.id} className={styles.single}>
                    <h3>{ninja.name}</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;