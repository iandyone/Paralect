import { useSelector } from "react-redux";
import logo from "../../assets/images/Header/logo.svg";
import search from "../../assets/images/Header/search.svg";
import { Input } from "../Input/input.jsx";
import "./header.css";

export function Header() {
    const temp = useSelector((store) => store.input.headerInput);
    function test(e) {
        e.preventDefault();
        console.log(`Header.jsx: поиск пользователя ${temp}`);
    }
    return (
        <header className="app__header header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logo} alt="Логотип" />
                    </div>
                    <form action="#" className="header__form form" onSubmit={(e) => test(e)}>
                        <Input type={"text"} id={"headerInput"} className={"header__input"} placeholder={"Enter GitHub username"} />
                        <button type="submit" className="header__button">
                            <img src={search} alt="Иконка поиска" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}