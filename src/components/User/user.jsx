import "./user.css";
import { Repository } from "../Repository/repository";
import { UserData } from "../UserData/userData";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/loader";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import userNotFoundIcon from "../../assets/images/Content/noUser.svg";

export function User() {
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const repos = useSelector((store) => store.user.repositories);
    const isDataFetched = useSelector((store) => store.user.isFetching);
    const responseStatus = useSelector((store) => store.user.status);

    function getRepository(name, description, url) {
        return <Repository repoName={name} description={description} url={url} />;
    }

    return (
        <div className="content__body">
            {
                (isDataFetched) ?
                    <Loader />
                    :
                    (responseStatus !== 200) ?
                        <InfoPlaceholder image={userNotFoundIcon} alt={"Пользователь не найден"} text={"User not found"} />
                        :
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
            }
        </div>
    );
}