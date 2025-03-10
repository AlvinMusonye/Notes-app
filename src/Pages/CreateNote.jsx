import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditInput(text);
  };

  const saveEdit = (id) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, text: editInput } : note)));
    setEditingId(null);
    setEditInput("");
  };

  return (
    <section className="mt-5 h-screen">
          <div className="p-4 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-4">Notes</h1>
      
   
      <div className="flex gap-3 mt-10 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 py-3 w-full rounded"
          placeholder="Enter a note..."
        />
        <button onClick={addNote} className="bg-sky-500 cursor-pointer hover:bg-sky-900 text-white p-2 rounded">
        <FaPlus />
        </button>
      </div>

      <ul className="mt-4">
        {notes.map((note) => (
          <li key={note.id} className="flex justify-between items-center p-2 border-b">
            {editingId === note.id ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                className="border p-1 rounded w-full"
              />
            ) : (
              <span>{note.text}</span>
            )}

            <div className="flex gap-2">
              {editingId === note.id ? (
                <button onClick={() => saveEdit(note.id)} className="bg-green-500 text-white px-2 py-1 rounded">
                  Save
                </button>
              ) : (
                <button onClick={() => startEditing(note.id, note.text)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
              )}

              <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
   
  );
};

export default NotesApp;
