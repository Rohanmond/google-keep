import { useNoteData } from "../contexts/NoteData";
import Todo from "./Todo";

const Todos = () => {
  const { state } = useNoteData();
  const pinnedData = state.noteData.filter((el) => el.isPinned === true);
  const unpinnedData = state.noteData.filter((el) => el.isPinned === false);
  return (
    <div className="todos">
      <div className="pinned">
        {pinnedData.map((el) => {
          return <Todo el={el} key={el.id} />;
        })}
      </div>
      <div className="notPinned">
        {unpinnedData.map((el) => {
          return <Todo el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
export default Todos;
