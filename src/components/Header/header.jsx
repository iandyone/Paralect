import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/Header/logo.svg";
import searchIcon from "../../assets/images/Header/search.svg";
import { Input } from "../Input/input.jsx";
import "./header.css";
import { showContentAction, showStartScreenAction } from "../../store/actions/contentActions";
import { resetInputAction, setRequestValueAction } from "../../store/actions/inputActions";
import { fetchingHasStartedAction, resetUserAction } from "../../store/actions/userActions";

export function Header() {
    const dispatch = useDispatch();
    const userName = useSelector((store) => store.input.userInput);

    function getUser(e, userName) {
        e.preventDefault();
        dispatch(setRequestValueAction(userName));
        dispatch(fetchingHasStartedAction());
        dispatch(resetUserAction());
        dispatch(showContentAction());
    }

    function showStartScreen() {
        const id = "userInput";
        document.title = `GitHub Profiles`;
        dispatch(resetInputAction(id));
        dispatch(showStartScreenAction());
    }

    return (
        <header className="app__header header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo" onClick={() => showStartScreen()}>
                        <img src={logo} alt="Логотип" />
                    </div>
                    <form action="#" className="header__form form" onSubmit={(e) => getUser(e, userName)}>
                        <Input id={"userInput"} type={"text"} className={"header__input"} placeholder={"Enter GitHub username"} />
                        <button type="submit" className="header__button">
                            <img src={searchIcon} alt="Кнопка 'Найти пользователя'" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}