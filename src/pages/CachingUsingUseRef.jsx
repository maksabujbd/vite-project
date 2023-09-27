import {useRef} from "react";

const CachingUsingUseRef = () => {

    let apiData = useRef(null);
    let myPtag = useRef();
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        apiData.current = await response.json();
    }

    const showData = () => {
        myPtag.current.innerText = JSON.stringify(apiData.current);
    }

    return (
        <>
            <h1 className="text-success">This is Caching Using UseRef</h1>
            {/*<pre>{JSON.stringify(apiData.current, null, 4)}</pre>*/}
            <p ref={myPtag}></p>
            <button className="btn btn-primary" style={{marginRight: "20px"}} onClick={fetchData}>Call API</button>
            <button className="btn btn-secondary" onClick={showData}>Show Data</button>
        </>
    );
}
export default CachingUsingUseRef