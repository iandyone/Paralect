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
    const lastPage = Math.ceil(reposCounter / reposPerPage);
    const lastPageIndex = currentPage * reposPerPage;
    const firstPageIndex = lastPageIndex - reposPerPage;
    const pages = [];


    for (let i = 1; i <= Math.ceil(reposCounter / reposPerPage); ++i) {
        pages.push(i);
    }

    const diplayedPages = getDisplayedPages(pages, currentPage)


    function previousPage() {
        if (currentPage !== 1) {
            dispatch(setCurrentPageAction(currentPage - 1));
        }
    }

    function nextPage() {
        if (currentPage !== lastPage) {
            dispatch(setCurrentPageAction(currentPage + 1));
        }
    }

    return (
        <div className="pagination">
            <div className="pagination__pages-navigation pages-nagigation">
                <PagesNavigation firstPageIndex={firstPageIndex} lastPageIndex={lastPageIndex} />
            </div>
            <ul className="pagination__pages">
                <li className="pagination__page" onClick={() => previousPage()}>
                    <PaginationPreviousButton />
                </li>
                {/* <li className={(currentPage === pages[0]) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(lastPage))}>FristPage ({pages[0]} )</li> */}
                {diplayedPages.map((page, index) => {
                    return <li className={(currentPage === page) ? "pagination__page-active" : "pagination__page"} key={index} onClick={() => dispatch(setCurrentPageAction(page))}>{page}</li>
                })}

                {((diplayedPages[diplayedPages.length - 1]) >= 3) ?
                    (currentPage + 3 < lastPage) ?
                        <li className="pagination__page">...</li>
                        :
                        <li className={(currentPage === lastPage - 1) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(lastPage - 1))}>PreLastPage ({lastPage - 1})</li>
                    :
                    <Fragment />
                }
                <li className={(currentPage === lastPage) ? "pagination__page-active" : "pagination__page"} onClick={() => dispatch(setCurrentPageAction(lastPage))}>Lastpage ({lastPage} )</li>
                <li className="pagination__page" onClick={() => nextPage()}>
                    <PaginationNextButton lastPage={lastPage} />
                </li>
            </ul>
        </div>
    );
} 