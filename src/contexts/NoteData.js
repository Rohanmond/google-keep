import { createContext, useContext, useReducer } from "react";
import uuid from "react-uuid";
const NoteDataContext = createContext();

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "input-form": {
      return {
        ...state,
        noteData: [
          {
            id: uuid(),
            title: action.payload.title,
            content: action.payload.content,
            backgroundColor: "--white-color",
            createdTime: new Date(),
            isPinned: false
          }
        ].concat(state.noteData)
      };
    }
    case "pinned-toggle": {
      const el = state.noteData.find((el) => el.id === action.payload.id);
      const newNoteData = state.noteData.map((ele) => {
        if (ele.id === el.id) return { ...el, isPinned: !el.isPinned };
        return ele;
      });
      return { ...state, noteData: newNoteData };
    }
    case "change-color": {
      const el = state.noteData.find((el) => el.id === action.payload.id);
      const newNoteData = state.noteData.map((ele) => {
        if (ele.id === el.id)
          return { ...el, backgroundColor: action.payload.color };
        return ele;
      });
      return { ...state, noteData: newNoteData };
    }
    default:
      return state;
  }
};
const NoteDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    noteData: []
  });
  return (
    <NoteDataContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteDataContext.Provider>
  );
};

const useNoteData = () => useContext(NoteDataContext);
export { NoteDataProvider, useNoteData };
