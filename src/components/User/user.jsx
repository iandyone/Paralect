import "./user.css";
import { Repository } from "../Repository/repository";
import { UserData } from "../UserData/userData";

export function User() {
    return (
        <div className="content__user user">
            <div className="user__body">
                <UserData />
                <div className="user__repos repos">
                    <h2 className="repos__title">Repositories (249)</h2>
                    <div className="repos__repositories">
                        <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                        <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                        <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                        <Repository repoName={"React-router repo"} description={"Tweak React components in real time. Deprecated: use Fast Refresh instead."} />
                    </div>
                </div>
            </div>
            <div className="user__pagination">Пагинация</div>
        </div>

    );
}