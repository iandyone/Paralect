import "./content.css";
import avatar from "../../assets/images/User/photo.jpg";
import { Repository } from "../Repository/repository";
import { UserActivity } from "../UserActivity/userActivity";

export function Content() {
    return (
        <div className="app__content content">
            <div className="content__container container">
                <div className="content__body">
                    <div className="content__data">
                        <div className="content__avatar">
                            <img src={avatar} alt="Аватар пользователя" />
                        </div>
                        <h3 className="content__name">Dan Abramov</h3>
                        <a href="google.com" className="content__link">gaearon</a>
                        <div className="content__media">
                            <UserActivity className={"content__activity followers"} content={"65.8k followers"}/>
                            <UserActivity className={"content__activity following"} content={"171 following"}/>
                        </div>
                    </div>
                    <div className="content__repos repos">
                        <h2 className="repos__title">Repositories (249)</h2>
                        <div className="repos__repositories">
                            <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                            <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                            <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                            <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                        </div>
                    </div>
                </div>
                <div className="content__pagination">Пагинация</div>
            </div>
        </div>
    );
}