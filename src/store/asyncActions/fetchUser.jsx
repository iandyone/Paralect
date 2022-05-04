import { fetchingHasStartedAction, fetchingIsDoneAction, fetchReposAction, fetchUserAction, setResponseStatusAction } from "../actions/userActions";

export function fetchUser(username) {
    return (dispatch) => {
        dispatch(fetchingHasStartedAction());
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                dispatch(setResponseStatusAction(response));
                if (response.status !== 404) {
                    fetch(`https://api.github.com/users/${username}/repos`)
                        .then((repos) => repos.json())
                        .then((json) => dispatch(fetchReposAction(json)));
                    return response;
                } else {
                    throw new Error ("Fetching error: user not found");
                }
            })
            .then((response) => response.json())
            .then((json) => { console.log(json); return json })
            .then((json) => { dispatch(fetchUserAction(json)) })
            .catch((error) => console.log(error.message))
            .finally(() => dispatch(fetchingIsDoneAction()));
    };
}


/* export function fetchUser(username) {
    return (dispatch) => {
        dispatch(fetchingHasStartedAction());
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                dispatch(setResponseStatusAction(response));
                return response;
            })
            .then((response) => response.json())
            .then((json) => { console.log(json); return json })
            .then((json) => { dispatch(fetchUserAction(json)) })
            .then(() => dispatch(fetchingIsDoneAction()));
    };
}  */