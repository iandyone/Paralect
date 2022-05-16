export function getDisplayedPages(pages, currentPage) {
    console.log("pages", pages);
    console.log("currentPage", currentPage);
    const lastPage = pages[pages.length - 1];

    if ((pages.length <= 2) && currentPage < 3) {
        return [];
    } else if (pages.length === 3) {
        return [3];
    } else if (pages.length === 4) {
        return [3, 4];
    } else if (pages.length === 5) {
        return [3, 4, 5];
    } else if (currentPage === 3) {
        return [3, 4];
    } else {
        if (currentPage > 3) {
            const displayedPages = [];
            if (currentPage + 2 >= lastPage) {
                displayedPages.push(lastPage - 4);
                displayedPages.push(lastPage - 3);
                displayedPages.push(lastPage - 2);
                return displayedPages;
            }
            displayedPages.push(currentPage - 1);
            displayedPages.push(currentPage);
            if ((currentPage + 2) < lastPage) {
                displayedPages.push(currentPage + 1);
            }
            return displayedPages;
        } else {
            return [3];
        }
    }
}
