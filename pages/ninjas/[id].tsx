
export const getStaticPaths = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // data is an array of objects
    // in this case each object is a user or a ninja
    // we have an id property for each user/ninja
    
    // for each item in this data array, 
    // make an object in paths that has
    // a paramerter id with that user/ninja id 
    const paths = data.map(ninja=>{
        // for each user/ninja return an object
        return {
            params:{id:ninja.id.toString()}
        }
    })
    // return paths
    return {
        paths,
        fallback: false // 404 page for any page with invalid id
    }
}

// it will run 10 times since we have 10 users/ninjas
// that is pased on the paths from getStaticPaths
// we get access to paths from context (automatically passed)
export const getStaticProps = async (context)=>{
    const id = context.params.id;
    //fetch for each ninja using the id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json();

    // here data is the data for each user/ninja
    return {
        props:{ninja:data}
    }
}

const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>

        </div>
     );
}
 
export default Details;