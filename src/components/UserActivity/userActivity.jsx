import "./userActivity.css";

export function UserActivity(props) {
    return (
        <p className={props.className}>{props.content}</p>
    );
}