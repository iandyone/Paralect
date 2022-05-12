import { useSelector } from "react-redux";

export function PaginationPreviousButton() {
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const currentColor = (currentPage === 1) ? "#808080" : "#0064EB";

    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4144 13.0001L14.7073 8.70718L13.293 7.29297L7.58594 13.0001L13.293 18.7072L14.7073 17.293L10.4144 13.0001Z" fill={currentColor} />
        </svg>
    );
}