import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <ul className={s.list}>
        <li className={s.info}>
          <IoPersonSharp />
          <p>{contact.name}</p>
        </li>
        <li className={s.info}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </li>
      </ul>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </>
  );
}
