import Menu from "../component/Menu.jsx";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    let {id, name} = useParams();
    return (
        <div>
            <Menu/>
            <h1>This is Product Page</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default ProductPage;