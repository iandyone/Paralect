import "./user.css";
import { Repository } from "../Repository/repository";
import { UserData } from "../UserData/userData";
import { useSelector } from "react-redux";

export function User() {
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const repos = useSelector((store) => store.user.repositories);

    function getRepository(name, description, url) {
        return <Repository repoName={name} description={description} url={url} />;
    }

    return (
        <div className="content__user user">
            <div className="user__body">
                <UserData />
                <div className="user__repos repos">
                    <h2 className="repos__title">Repositories ({reposCounter})</h2>
                    <div className="repos__repositories">
                        {
                            repos.map((repository) => {
                                return getRepository(repository.name, repository.description, repository.html_url)
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="user__pagination">Пагинация</div>
        </div>

    );
}