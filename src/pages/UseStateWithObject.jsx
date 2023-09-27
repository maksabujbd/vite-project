import UseState from "./UseState.jsx";
import {useState} from "react";

const UseStateWithObject = ()=>{
    
    const [myObj, setMyObj] = useState({
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3"
    });
    
    const change = () => {
        setMyObj(
            prevObj => ({
                ...prevObj,
                key1: "New Value for Key 1"
            })
        );

        // setMyObj(
        //     prevObj => {
        //         return ({
        //             ...prevObj,
        //             key1: "New Value for Key 1"
        //         });
        //     }
        // );
    }
    
    return(
        <>
            <div>
                <h1 className="text-success">This is UseState with object</h1>
                
                <h1>{myObj.key1}</h1>
                <h1>{myObj.key2}</h1>
                <h1>{myObj.key3}</h1>
                <button className="btn btn-primary" onClick={change}>Click</button>
            </div>
        </>
    );
}

export default UseStateWithObject