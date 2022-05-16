import { Header } from '../Header/header';
import { Content } from '../Content/content';
import './app.css';
import { useSelector } from 'react-redux';
import { InfoPlaceholder } from '../InfoPlaceholder/infoPlaceholder';
import homeIcon from "../../assets/images/Content/search.svg";

export function App() {
    const showHomeScreen = useSelector((store) => store.content.showHomeScreen);

    return (
            <div className="app">
                <Header />
                {(showHomeScreen) ?
                    <InfoPlaceholder image={homeIcon} alt={"Главная"} text={"Start with searching  a GitHub user"} />
                    :
                    <Content />
                }
            </div>
    );
}
