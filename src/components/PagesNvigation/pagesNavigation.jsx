import { useSelector } from "react-redux";
import "./pagesNavigation.css";

export function PagesNavigation(props) {
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const firstPageIndex = props.firstPageIndex;
    const lastPageIndex = (props.lastPageIndex < reposCounter) ? props.lastPageIndex : reposCounter;

    if (firstPageIndex + 1 !== reposCounter) {
        return (<p className="pages-navigation__navigation">{firstPageIndex + 1} - {lastPageIndex} of {reposCounter} items</p>);
    } else {
        return (<p className="pages-navigation__navigation">{firstPageIndex + 1} of {reposCounter} items</p>);
    }
}