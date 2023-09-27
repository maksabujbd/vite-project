import {useState} from "react";

const TodoAppUsingUseState = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addToList = () => {
        list.push(item);
        setList([...list]);
    }

    const deleteItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    };
    return (
        <div>
            <h1>Todo App</h1>

            <h1>{list.length}</h1>
            {/*<pre>{item}</pre>*/}
            <input onChange={(event) => setItem(event.target.value)} placeholder="Item"/>
            <button onClick={addToList}>Add</button>
            <br/><br/>
            <table className="table table-bordered table-striped">
                <tbody>
                {
                    list && list.map((item, index) => {
                        return (
                            <tr>
                                <td>{item}</td>
                                <td>
                                    <button onClick={()=>{deleteItem(index)}}>Remove</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default TodoAppUsingUseState;