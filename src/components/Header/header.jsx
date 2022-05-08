import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/Header/logo.svg";
import searchIcon from "../../assets/images/Header/search.svg";
import { Input } from "../Input/input.jsx";
import "./header.css";
import { showContentAction } from "../../store/actions/contentActions";
import { setRequestValueAction } from "../../store/actions/inputActions";

export function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(store => store.input.userInput);

    function getUser(e, userName) {
        e.preventDefault();
        console.log(`Header.jsx: поиск пользователя ${userName}`);
        dispatch(setRequestValueAction(userName));
        dispatch(showContentAction());
    }

    return (
        <header className="app__header header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logo} alt="Логотип" />
                    </div>
                    <form action="#" className="header__form form" onSubmit={(e) => getUser(e, userName)}>
                        <Input type={"text"} id={"userInput"} className={"header__input"} placeholder={"Enter GitHub username"} />
                        <button type="submit" className="header__button">
                            <img src={searchIcon} alt="Иконка поиска" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}