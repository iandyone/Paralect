import "./user.css";
import { UserData } from "../UserData/userData";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/loader";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import userNotFoundIcon from "../../assets/images/Content/noUser.svg";
import { UserRepositories } from "../UserRepositories/userRepositories";

export function User() {
    const isDataFetched = useSelector((store) => store.user.isFetching);
    const responseStatus = useSelector((store) => store.user.status);

    return (
        <div className="content__body">
            {
                (isDataFetched) ?
                    <Loader />
                    :
                    (responseStatus !== 200) ?
                        <InfoPlaceholder image={userNotFoundIcon} alt={"Пользователь не найден"} text={"User not found"} />
                        :
                        <div className="content__user user">
                            <div className="user__body">
                                <UserData />
                                <UserRepositories />
                            </div>
                        </div>
            }
        </div>
    );
}