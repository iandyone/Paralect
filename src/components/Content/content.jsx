import "./content.css";
import { User } from "../User/user";
import { useSelector } from "react-redux";
import homeIcon from "../../assets/images/Content/search.svg";
import noUser from "../../assets/images/Content/noUser.svg";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import { Loader } from "../Loader/loader";

export function Content() {
    const isDataFetched = useSelector((store) => store.user.isFetching);
    const showHomeScreen = useSelector((store) => store.content.showHomeScreen);
    const responseStatus = useSelector((store) => store.user.status);

    return (
        <div className="app__content content">
            <div className="content__container container">
                {(showHomeScreen) ?
                    <InfoPlaceholder image={homeIcon} alt={"Главная"} text={"Start with searching a GitHub user"} />
                    :
                    (isDataFetched) ?
                        <Loader />
                        :
                        (responseStatus === 404) ?
                            <InfoPlaceholder image={noUser} alt={"Пользователь не найден"} text={"User not found"} />
                            :
                            <User />
                }
            </div>
        </div>
    );
}