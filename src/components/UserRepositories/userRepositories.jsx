import { useSelector } from "react-redux";
import { Repository } from "../Repository/repository";
import "./userRepositories.css";
import userNotFoundIcon from "../../assets/images/Content/noRepos.svg";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import { Fragment } from "react";
import { Pagination } from "../Pagination/pagination";

export function UserRepositories() {
    const repos = useSelector((store) => store.user.repositories);
    const reposCounter = useSelector((store) => store.user.user.public_repos);

    const currentPage = useSelector((store) => store.pagination.currentPage);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const displayedRepos = repos.slice(firstRepoIndex, lastRepoIndex);

    function getRepository(name, description, url) {
        return <Repository repoName={name} description={description} url={url} />;
    }

    return (
        <div className="user__repos repos">
            {(reposCounter) ?
                <Fragment>
                    <h2 className="repos__title">Repositories ({reposCounter})</h2>
                    <div className="repos__repositories">
                        {
                            displayedRepos.map((repository) => {
                                return getRepository(repository.name, repository.description, repository.html_url)
                            })
                        }
                    </div>
                    <Pagination />
                </Fragment>
                :
                <div className="repos__loader">
                    <InfoPlaceholder image={userNotFoundIcon} alt={"Repositories not found"} text={"Repository list is empty"} />
                </div>
            }
        </div>
    );
}