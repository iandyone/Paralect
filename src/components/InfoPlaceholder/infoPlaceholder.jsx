import "./infoPlaceholder.css";

export function InfoPlaceholder(props) {
    return (
        <div className="content__home home">
            <div className="home__picture">
                <img src={props.image} alt={props.alt} />
            </div>
            <p className="home__text">{props.text}</p>
        </div>
    );
}