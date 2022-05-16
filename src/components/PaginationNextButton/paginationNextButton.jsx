import { useSelector } from "react-redux";

export function PaginationNextButton(props) {
    const lastPage = props.lastPage;
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const color = (currentPage === lastPage) ? "#808080" : "#0064EB";

    return (
        <svg svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M10 8L15 13L10 18" stroke={color} stroke-width="2" />
        </svg >
    );
}