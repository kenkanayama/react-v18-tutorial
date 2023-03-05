import stypes from "./SubButton.module.css";

const SubButton = ({clickHandler}) => {
    return <button className={stypes.btn} onClick={clickHandler}>サブボタン</button>
}
export default SubButton;