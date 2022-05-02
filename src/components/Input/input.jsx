import { useDispatch, useSelector } from "react-redux";
import { setInputValueAction } from "../../store/actions/inputActions";
import "./input.css";


export function Input(props) {
    const temp = useSelector(store => store.input.headerInput);
    const dispatch = useDispatch();

    function setCurrentValue(...props) {
        const [id, value] = props;
        dispatch(setInputValueAction({id, value}));
        console.log(temp);
    }

    return <input type={props.type} id={props.id} className={props.className} placeholder={props.placeholder} onChange={(event) => setCurrentValue(event.target.id, event.target.value)} />
}