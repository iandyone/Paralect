import { useSelector } from "react-redux";
import "./pagesNavigation.css";

export function PagesNavigation(props) {
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const firstRepoIndex = props.firstRepoIndex;
    const lastRepoIndex = (props.lastRepoIndex < reposCounter) ? props.lastRepoIndex : reposCounter;

    if (firstRepoIndex + 1 !== reposCounter) {
        return <p className="pages-navigation__navigation">{firstRepoIndex + 1} - {lastRepoIndex} of {reposCounter} items</p>;
    } else {
        return <p className="pages-navigation__navigation">{firstRepoIndex + 1} of {reposCounter} items</p>;
    }
}