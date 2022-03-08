import { useState } from "react";
import { useNoteData } from "../contexts/NoteData";

const KeepInput = () => {
  const [form, setForm] = useState({ title: "", content: "" });

  const { dispatch } = useNoteData();
  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "input-form", payload: form });
        setForm({ title: "", content: "" });
      }}
    >
      <input
        placeholder="title"
        className="text-input"
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="content"
        rows="5"
        cols="33"
        className="text-input"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>
      <input
        type="submit"
        className="btn btn-primary background-primary brd-rd-semi-sq"
      />
    </form>
  );
};
export default KeepInput;
