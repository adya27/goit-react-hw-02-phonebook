import styles from "./DeleteBtn.module.css";

function DeleteBtn(props) {
  return (
    <button
      className={styles.deleteBtn}
      onClick={props.onClickDeleteBtn}
      type="button"
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
