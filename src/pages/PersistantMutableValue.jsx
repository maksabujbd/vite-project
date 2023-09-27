import {useRef} from "react";

const PersistantMutableValue = () => {

    // Initial value of number variable is 0.
    let number = useRef(0);

    const change = () => {
        number.current++;
        console.warn(number.current);
    }

    return (
        <>
            <div>
                <h1 className="text-success">This is Persistant Mutable Value</h1>

                <button onClick={change}>Click</button>
            </div>
        </>
    );
}

export default PersistantMutableValue