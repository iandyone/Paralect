import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/Header/logo.svg";
import search from "../../assets/images/Header/search.svg";
import { Input } from "../Input/input.jsx";
import { fetchUser } from "../../store/asyncActions/fetchUser";
import "./header.css";
import { showUserDataAction } from "../../store/actions/contentActions";

export function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(store => store.input.userInput);

    function getUser(userName) {
        console.log(`Header.jsx: поиск пользователя ${userName}`);
        dispatch(fetchUser(userName));
        dispatch(showUserDataAction());
    }


    return (
        <header className="app__header header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logo} alt="Логотип" />
                    </div>
                    <form action="#" className="header__form form" onSubmit={() => getUser(userName)}>
                        <Input type={"text"} id={"userInput"} className={"header__input"} placeholder={"Enter GitHub username"} />
                        <button type="submit" className="header__button">
                            <img src={search} alt="Иконка поиска" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}