import "./content.css";
import { User } from "../User/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../../helpers/fetchUser";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";

export function Content() {
    const dispatch = useDispatch();
    const request = useSelector((store) => store.input.request);
    const startPage = useSelector((store) => store.pagination.startPage);

    useEffect(() => {
        dispatch(setCurrentPageAction(startPage));
        dispatch(fetchUser(request, startPage));

    })

    return (
        <div className="app__content content">
            <User />
        </div>
    );
}