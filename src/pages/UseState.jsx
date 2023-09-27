import {useState} from "react";

const UseState = () => {

    let [number, setNumber] = useState(0);
    
    const incrementNumber = () =>{
        setNumber(number+1);
    }

    const decrementNumber = () => {
        setNumber(number-1);
    };
    return (
        <>
            <div>
                <h1 className="text-success">This is the example of UseState</h1>

                <h1>Number: {number}</h1>
                {/*<button*/}
                {/*    className="btn btn-primary"*/}
                {/*    style={{padding: "10px 50px"}}*/}
                {/*    onClick={() => {setNumber(number + 1)}}>Click*/}
                {/*</button>*/}

                <button
                    className="btn btn-primary"
                    style={{padding: "10px 50px"}}
                    onClick={() => {incrementNumber()}}>Increment +
                </button>

                <button
                    className="btn btn-secondary"
                    style={{padding: "10px 50px", marginLeft: "20px"}}
                    onClick={() => {decrementNumber()}}>Decrement -
                </button>
            </div>
        </>
    );
}
export default UseState