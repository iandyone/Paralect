import "./content.css";
import { User } from "../User/user";

export function Content() {
    return (
        <div className="app__content content">
            <div className="content__container container">
                <User />
            </div>
        </div>
    );
}