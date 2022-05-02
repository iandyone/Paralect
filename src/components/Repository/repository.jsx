import "./repository.css";

export function Repository(props) {
    return (
        <div className="repos__item">
            <h4 className="repos__name">
                <a target="blank" href="www.google.com">{props.repoName}</a>
            </h4>
            <p className="repo__description">{props.description}</p>
        </div>
    );
}
