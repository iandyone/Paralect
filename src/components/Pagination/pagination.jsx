import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";
import { PaginationNextButton } from "../PaginationNextButton/paginationNextButton";
import { PaginationPreviousButton } from "../PaginationPreviousButton/paginationPreviousButton";
import { PagesNavigation } from "../PagesNvigation/pagesNavigation";

export function Pagination() {

    const pages = [];
    const dispatch = useDispatch();
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const lastPage = Math.ceil(reposCounter / reposPerPage);
    const lastPageIndex = currentPage * reposPerPage;
    const firstPageIndex = lastPageIndex - reposPerPage;

    for (let i = 1; i <= Math.ceil(reposCounter / reposPerPage); ++i) {
        pages.push(i);
    }


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
                {pages.map((page, index) => {
                    return <li className={(currentPage === page) ? "pagination__page-active" : "pagination__page"} key={index} onClick={() => dispatch(setCurrentPageAction(page))}>{page}</li>
                })}
                <li className="pagination__page" onClick={() => nextPage()}>
                    <PaginationNextButton lastPage={lastPage} />
                </li>
            </ul>
        </div>
    );
}