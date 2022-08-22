import { BiCheck } from "react-icons/bi";
import useTask from "../../hooks/useTask";

import "./styles.scss";

export function InputGroup() {
  const { title, setTitle, createTask } = useTask();

  return (
    <div className="inputGroup">
      <form>
        <input
          type="text"
          value={title}
          placeholder="Add your activity here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button disabled={!title} title="button-input" onClick={() => createTask(title)}>
          <BiCheck size={25} color="white" />
        </button>
        <button>
          add
        </button>
      </form>
    </div>
  );
}
