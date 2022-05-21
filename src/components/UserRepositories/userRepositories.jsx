import { useSelector } from "react-redux";
import { Repository } from "../Repository/repository";
import "./userRepositories.css";
import reposNotFoundIcon from "../../assets/images/Content/noRepos.svg";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import { Fragment } from "react";
import { Pagination } from "../Pagination/pagination";
import { RepositoryLoader } from "../RepositoryLoader/repositoryLoader";

export function UserRepositories() {
    const repos = useSelector((store) => store.user.repositories);
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const isReposListEmpty = reposCounter === 0;
    const isReposFetching = useSelector((store) => store.user.isReposFetching);

    function getRepository(name, description, url, id) {
        return <Repository repoName={name} description={description} url={url} key={id} />;
    }

    return (
        <div className="user__repos repos">
            {(isReposListEmpty) ?
                <div className="repos__placeholder">
                    <InfoPlaceholder image={reposNotFoundIcon} alt={"Repositories not found"} text={"Repository list is empty"} />
                </div>
                :
                <Fragment>
                    <h2 className="repos__title">Repositories ({reposCounter})</h2>
                    {((isReposFetching) ?
                        <RepositoryLoader />
                        :
                        <div className="repos__repositories">
                            {repos.map((repository) => {
                                return getRepository(repository.name, repository.description, repository.html_url, repository.id);
                            })}
                        </div>
                    )}
                    <Pagination />
                </Fragment>
            }
        </div>
    );
}