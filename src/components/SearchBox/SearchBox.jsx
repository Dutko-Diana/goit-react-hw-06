import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="username"
        className={s.input}
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}
