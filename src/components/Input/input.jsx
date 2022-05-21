import { useDispatch, useSelector } from "react-redux";
import { setInputValueAction } from "../../store/actions/inputActions";
import "./input.css";

export function Input(props) {
    const dispatch = useDispatch();
    const id = props.id;
    const value = useSelector((store) => store.input[id]);

    function setCurrentValue(id, value) {
        dispatch(setInputValueAction({ id, value }));
    }

    return (<input id={props.id}
        type={props.type} 
        className={props.className}
        placeholder={props.placeholder} 
        value={value}
        onChange={(e) => setCurrentValue(e.target.id, e.target.value)} />
    );
}