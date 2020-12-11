import DeleteBtn from "../DeleteBtn/DeleteBtn";
import styles from "./Contact.module.css";

function Contact(props) {
  return (
    <li className={styles.contact}>
      {props.name} : {props.number}
      <DeleteBtn onClickDeleteBtn={() => props.deleteBtn(props.id)} />
    </li>
  );
}

export default Contact;
