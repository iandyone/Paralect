import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";
import { PaginationNextButton } from "../PaginationNextButton/paginationNextButton";
import { PaginationPreviousButton } from "../PaginationPreviousButton/paginationPreviousButton";
import { PagesNavigation } from "../PagesNavigation/pagesNavigation";
import { getDisplayedPages } from "../../helpers/getDisplayedPages";
import { fetchRepos } from "../../helpers/fetchRepos";

export function Pagination() {
    const dispatch = useDispatch();
    const userName = useSelector((store) => store.input.request);
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const startPage = useSelector((store) => store.pagination.startPage);
    const lastPage = Math.ceil(reposCounter / reposPerPage);
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const pages = [];

    for (let i = 1; i <= Math.ceil(reposCounter / reposPerPage); ++i) {
        pages.push(i);
    }

    function getDynamicStartEllipsis() {
        const showStartEllipsis = (currentPage - 3) > 1;
        return (
            (showStartEllipsis) ?
                <li li className="pagination__page">...</li>
                :
                <li className={(currentPage === startPage + 1) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(startPage + 1)}>{startPage + 1}</li>
        );
    }

    function getDynamicEndEllipsis() {
        const showEndEllipsis = (currentPage + 4) <= lastPage;
        return (
            (showEndEllipsis) ?
                <li className="pagination__page">...</li>
                :
                <li className={(currentPage === lastPage - 1) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(lastPage - 1)}>{lastPage - 1}</li>
        );
    }

    function getDynamicLastPage() {
        return <li className={(currentPage === lastPage) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(lastPage)}>{lastPage}</li>;
    }

    function toPreviousPage() {
        if (currentPage !== 1) {
            dispatch(fetchRepos(userName, currentPage - 1));
            dispatch(setCurrentPageAction(currentPage - 1));
        }
    }

    function toNextPage() {
        if (currentPage !== lastPage) {
            dispatch(fetchRepos(userName, currentPage + 1));
            dispatch(setCurrentPageAction(currentPage + 1));
        }
    }

    function setCurrentPage(page) {
        dispatch(setCurrentPageAction(page));
        dispatch(fetchRepos(userName, page));
    }

    const diplayedPages = getDisplayedPages(pages, currentPage);
    const dynamicStartEllipsis = getDynamicStartEllipsis();
    const dynamicEndEllipsis = getDynamicEndEllipsis();
    const dynamicLastPage = getDynamicLastPage();
    const renderDynamicStartEllipsis = pages.length >= 2;
    const renderDynamicEndEllipsis = pages.length >= 5;
    const isLastPageDynamic = lastPage > 5;

    return (
        <div className="pagination">
            <div className="pagination__pages-navigation pages-nagigation">
                <PagesNavigation firstRepoIndex={firstRepoIndex} lastRepoIndex={lastRepoIndex} />
            </div>
            <ul className="pagination__pages">
                <li className="pagination__page" onClick={() => toPreviousPage()}>
                    <PaginationPreviousButton />
                </li>
                <li className={(currentPage === startPage) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(startPage)}>{startPage}</li>

                {renderDynamicStartEllipsis && dynamicStartEllipsis}

                {diplayedPages.map((page, index) => {
                    return <li className={(currentPage === page) ? "pagination__page-active" : "pagination__page"} key={index} onClick={() => setCurrentPage(page)}>{page}</li>
                })}

                {renderDynamicEndEllipsis && dynamicEndEllipsis}

                {isLastPageDynamic && dynamicLastPage}

                <li className="pagination__page" onClick={() => toNextPage()}>
                    <PaginationNextButton lastPage={lastPage} />
                </li>
            </ul>
        </div >
    );
} 