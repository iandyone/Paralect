/** Description of the fetchRepos function. 
 ** async function for getting users data from the GitHub API. The received data is saved in the store
 ** param {string} userName - user name
*/

import { fetchingHasDoneAction, fetchReposAction } from "../store/actions/userActions";

export function fetchRepos(userName, currentPage) {
    return ((dispatch) => {
        fetch(`https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=4`)
            .then((response) => response.json())
            .then((json) => {
                dispatch(fetchReposAction(json));
                dispatch(fetchingHasDoneAction());
            })
            .catch((error) => console.log(error.message));
    });
}