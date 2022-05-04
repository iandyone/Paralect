import icon from '../../assets/images/Content/loader.svg';
import './loader.css';

export function Loader() {
    return (
        <div className="loader">
            <img src={icon} className="loader__picture" alt="logo" />
            <p className="loader__text">Loading...</p>
        </div>
    );
}

