/* eslint-disable no-loop-func */
import "./content.css";
import { User } from "../User/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchingHasStartedAction, fetchingHasDoneAction, fetchReposAction, fetchUserAction, setResponseStatusAction } from "../../store/actions/userActions";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";

export function Content() {
    const dispatch = useDispatch();
    const request = useSelector((store) => store.input.request);

    function fetchUser(username) {
        return (dispatch) => {
            dispatch(fetchingHasStartedAction());
            dispatch(setCurrentPageAction(1));
            fetch(`https://api.github.com/users/${username}`)
                .then((response) => {
                    dispatch(setResponseStatusAction(response));
                    if (response.status !== 200) {
                        dispatch(fetchingHasDoneAction());
                        if (response.status !== 404) {
                            throw new Error("Произошла ошибка при загрузке данных пользователя")
                        }
                    }
                    return response;
                })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    dispatch(fetchUserAction(json));
                    return json;
                })
                .then((json) => {
                    const reposCounter = json.public_repos;
                    const links = [];

                    for (let i = 1; i <= Math.ceil(reposCounter / 100); ++i) {
                        links.push(fetch(`https://api.github.com/users/${username}/repos?page=${i}&per_page=100`).then((resp) => resp.json()));
                    }

                    Promise.all(links)
                        .then((responses) => {
                            let reposList = [];
                            responses.forEach((item) => reposList = [...reposList, ...item]);
                            console.log("reposList: ", reposList);
                            dispatch(fetchReposAction(reposList));
                            dispatch(fetchingHasDoneAction());
                        })
                })
                .catch((error) => console.log(error.message));
        };
    }

    useEffect(() => {
        dispatch(fetchUser(request));
    })

    return (
        <div className="app__content content">
            <User />
        </div>
    );
}