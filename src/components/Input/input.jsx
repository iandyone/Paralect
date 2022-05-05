import { useDispatch, useSelector } from "react-redux";
import { setInputValueAction } from "../../store/actions/inputActions";
import "./input.css";


export function Input(props) {
    const dispatch = useDispatch();
    const id = props.id;
    const value = useSelector((store) => store.input[id]);

    /* --- DEBUG --- */
   /*  console.log(value) */
    /* ------------- */

    function setCurrentValue(id, value) {
        dispatch(setInputValueAction({   id, value }));
    }

    return <input type={props.type} id={props.id} className={props.className} placeholder={props.placeholder} value={value
    } onChange={(event) => setCurrentValue(event.target.id, event.target.value)} />
}