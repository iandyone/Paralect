import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";
import { PaginationNextButton } from "../PaginationNextButton/paginationNextButton";
import { PaginationPreviousButton } from "../PaginationPreviousButton/paginationPreviousButton";
import { PagesNavigation } from "../PagesNavigation/pagesNavigation";
import { getDisplayedPages } from "../../helpers/getDisplayedPages";
import { Fragment } from "react";

export function Pagination() {
    const dispatch = useDispatch();
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const startPage = 1;
    const lastPage = Math.ceil(reposCounter / reposPerPage);
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const pages = [];

    for (let i = 1; i <= Math.ceil(reposCounter / reposPerPage); ++i) {
        pages.push(i);
    }

    const diplayedPages = getDisplayedPages(pages, currentPage)

    function toPreviousPage() {
        if (currentPage !== 1) {
            dispatch(setCurrentPageAction(currentPage - 1));
        }
    }

    function toNextPage() {
        if (currentPage !== lastPage) {
            dispatch(setCurrentPageAction(currentPage + 1));
        }
    }

    return (
        <div className="pagination">
            <div className="pagination__pages-navigation pages-nagigation">
                <PagesNavigation firstRepoIndex={firstRepoIndex} lastRepoIndex={lastRepoIndex} />
            </div>
            <ul className="pagination__pages">
                <li className="pagination__page" onClick={() => toPreviousPage()}>
                    <PaginationPreviousButton />
                </li>

                <li className={(currentPage === startPage) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(startPage))}>{startPage}</li>

                {(pages.length >= 2) ?
                    ((currentPage - 3) > 1) ?
                        <li li className="pagination__page">...</li>
                        :
                        <li className={(currentPage === startPage + 1) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(startPage + 1))}>{startPage + 1}</li>
                    :
                    <Fragment />
                }


                {diplayedPages.map((page, index) => {
                    return <li className={(currentPage === page) ? "pagination__page-active" : "pagination__page"} key={index} onClick={() => dispatch(setCurrentPageAction(page))}>{page}</li>
                })}

                {(pages.length >= 5) ?
                    ((currentPage + 4) <= lastPage) ?
                        <li className="pagination__page">...</li>
                        :
                        <li className={(currentPage === lastPage - 1) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(lastPage - 1))}>{lastPage - 1}</li>
                    :
                    <Fragment />
                }


                {(lastPage > 5) ?
                    <li className={(currentPage === lastPage) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(lastPage))}>{lastPage}</li>
                    :
                    <Fragment />
                }

                <li className="pagination__page" onClick={() => toNextPage()}>
                    <PaginationNextButton lastPage={lastPage} />
                </li>
            </ul>
        </div >
    );
} 