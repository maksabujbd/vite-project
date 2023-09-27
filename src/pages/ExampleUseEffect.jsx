import {useEffect, useState} from "react";

const ExampleUseEffect = () => {

    let [data, setData] = useState([]);

    useEffect(() => {
        // Async await function implementation
        // Immediately invoked function
        (async () => {
            let response = await fetch('https://dummyjson.com/products/1')
            let jsonData =  await response.json();
            setData(jsonData);
        })();
    }, []);


    // Promise function for sequential execution
    useEffect(() => {

        // console.warn('Hello React');
        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(jsonData => setData(jsonData))
    }, []);

    return (
        <>
            <div>
                <h1>This is an example of use effect</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </>
    );
}

export default ExampleUseEffect