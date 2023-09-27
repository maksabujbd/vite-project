import Menu from "../component/Menu.jsx";
import {useParams} from "react-router-dom";

const ProfilePage = () => {
    
    let {facebookId, youtubeId}=useParams();
    return (
        <div>
            <Menu/>
            <h1>This is Profile Page.</h1>
            <p>Facebook Id: {facebookId}</p>
            <p>Youtube Id: {youtubeId}</p>
        </div>
    );
};

export default ProfilePage;