import { useSelector } from "react-redux";
import "./pagesNavigation.css";

export function PagesNavigation() {
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    /* const firstRepoID = props.firstRepoIndex + 1; */
    const lastRepoIndex = currentPage * reposPerPage;
    const lastRepoID = (lastRepoIndex < reposCounter) ? lastRepoIndex : reposCounter;


    const firstRepoID = lastRepoIndex - reposPerPage + 1;

    if (firstRepoID !== reposCounter) {
        return <p className="pages-navigation__navigation">{firstRepoID} - {lastRepoID} of {reposCounter} items</p>;
    } else {
        return <p className="pages-navigation__navigation">{firstRepoID} of {reposCounter} items</p>;
    }
}