import "./repository.css";

export function Repository(props) {
    return (
        <div className="repos__item">
            <h4 className="repos__name">
                <a href={props.url} target="_blank" rel="noreferrer">{props.repoName}</a>
            </h4>
            <p className="repos__description">{props.description ?? "Description not found"}</p>
        </div>
    );
}
