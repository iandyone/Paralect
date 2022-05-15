export function getDisplayedPages(pages, currentPage) {
    console.log("pages", pages)
    console.log("currentPage", currentPage)
    const lastPage = pages[pages.length - 1];
    const displayedPages = [];


    if ((currentPage === 1)) {
        if (pages.length === 1) {
            return displayedPages;
        }
        displayedPages.push(1);
        if (pages[currentPage + 1]) {
            displayedPages.push(currentPage + 1);
            if (pages[currentPage + 2]) {
                displayedPages.push(currentPage + 2);
            }
        }
    } else if (currentPage === 2) {
        displayedPages.push(1);
        displayedPages.push(2);
        if (pages[currentPage + 1]) {
            displayedPages.push(currentPage + 1);
        }
    } else if (currentPage === 3) {
        if (lastPage >= 5) {
            displayedPages.push(currentPage - 1);
            displayedPages.push(currentPage);
            displayedPages.push(currentPage + 1);
        }
        else if (lastPage === 4) {
            displayedPages.push(currentPage - 1);
            displayedPages.push(currentPage);
        } else {
            displayedPages.push(currentPage - 2);
            displayedPages.push(currentPage - 1);
        }
    } else if (currentPage === pages[pages.length - 3]) {
        displayedPages.push(currentPage - 2);
        displayedPages.push(currentPage - 1);
        displayedPages.push(currentPage);

    } else if (currentPage === pages[pages.length - 2]) {
        displayedPages.push(currentPage - 3);
        displayedPages.push(currentPage - 2);
        displayedPages.push(currentPage - 1);
    } else if (currentPage === pages[pages.length - 1]) {
        displayedPages.push(currentPage - 4);
        displayedPages.push(currentPage - 3);
        displayedPages.push(currentPage - 2);
    } else {
        displayedPages.push(currentPage - 1);
        displayedPages.push(currentPage);
        displayedPages.push(currentPage + 1);
    }
    return displayedPages;
}
