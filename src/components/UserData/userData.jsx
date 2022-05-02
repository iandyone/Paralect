import "./userData.css";
import avatar from "../../assets/images/User/photo.jpg";
import { UserActivity } from "../UserActivity/userActivity";

export function UserData() {
    return (
        <div className="user__data">
            <div className="user__avatar">
                <img src={avatar} alt="Аватар пользователя" />
            </div>
            <h3 className="user__name">Dan Abramov</h3>
            <a href="google.com" className="user__link">gaearon</a>
            <div className="user__media">
                <UserActivity className={"user__activity followers"} content={"65.8k followers"} />
                <UserActivity className={"user__activity following"} content={"171 following"} />
            </div>
        </div>
    );
}