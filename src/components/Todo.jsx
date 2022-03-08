import { useNoteData } from "../contexts/NoteData";

const Todo = ({ el }) => {
  const { dispatch } = useNoteData();
  return (
    <div
      className="card-container"
      style={{ backgroundColor: `var(${el.backgroundColor})` }}
    >
      <span
        className="material-icons-outlined"
        onClick={() => dispatch({ type: "pinned-toggle", payload: el })}
      >
        {el.isPinned ? "bookmark" : "bookmark_border"}
      </span>

      <div className="card-content">
        <div className="card-text">
          <div className="card-title">
            <h3>{el.title}</h3>
          </div>
          <div className="card-context">
            <p>{el.content}</p>
            <p>{el.createdTime.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="card-footer-elemen">
        <button
          className="btn btn-primary background-primary"
          onClick={() =>
            dispatch({
              type: "change-color",
              payload: { id: el.id, color: "--blue-400" }
            })
          }
        >
          Blue
        </button>
        <button
          className="btn btn-primary background-danger"
          onClick={() =>
            dispatch({
              type: "change-color",
              payload: { id: el.id, color: "--red-400" }
            })
          }
        >
          Red
        </button>
        <button
          className="btn btn-primary background-success"
          onClick={() =>
            dispatch({
              type: "change-color",
              payload: { id: el.id, color: "--green-400" }
            })
          }
        >
          Green
        </button>
        <button
          className="btn btn-primary background-warn"
          onClick={() =>
            dispatch({
              type: "change-color",
              payload: { id: el.id, color: "--yellow-200" }
            })
          }
        >
          Yellow
        </button>
      </div>
    </div>
  );
};
export default Todo;
