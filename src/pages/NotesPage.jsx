import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

/* -------------------- Sortable Note -------------------- */
function SortableNote({ note, index, onDelete, onEdit, onSave }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-yellow-100 rounded-xl p-4 relative shadow hover:shadow-lg transition"
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute left-3 top-3 cursor-grab text-gray-600"
      >
        ☰
      </div>

      {/* Actions */}
      <div className="absolute right-3 top-3 flex gap-2">
        <FaPencilAlt
          className="cursor-pointer text-blue-600"
          onClick={() => onEdit(index)}
        />
        <MdDelete
          className="cursor-pointer text-red-600"
          onClick={() => onDelete(index)}
        />
      </div>

      {note.isEditing ? (
        <>
          <input
            className="w-full p-2 mt-8 rounded border"
            value={note.title}
            onChange={(e) => onSave(index, "title", e.target.value)}
          />

          <textarea
            className="w-full p-2 mt-2 rounded border resize-none"
            rows={4}
            value={note.discription}
            onChange={(e) => onSave(index, "discription", e.target.value)}
          />

          <button
            className="mt-3 bg-green-600 text-white px-4 py-1 rounded w-full"
            onClick={() => onEdit(null)}
          >
            Done
          </button>
        </>
      ) : (
        <>
          <h2 className="font-bold text-lg mt-6 break-words">
            {note.title}
          </h2>
          <p className="text-sm text-gray-700 break-words mt-1">
            {note.discription}
          </p>
        </>
      )}
    </div>
  );
}

/* -------------------- Notes Page -------------------- */
export const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("data")) || [];
    setNotes(stored.map((n) => ({ ...n, isEditing: false })));
  }, []);

  const syncStorage = (data) => {
    localStorage.setItem(
      "data",
      JSON.stringify(data.map(({ isEditing, ...rest }) => rest))
    );
  };

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setNotes((prev) => {
      const updated = arrayMove(prev, active.id, over.id);
      syncStorage(updated);
      return updated;
    });
  }

  function handleDelete(index) {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
    syncStorage(updated);
  }

  function handleEdit(index) {
    setNotes((prev) =>
      prev.map((n, i) => ({ ...n, isEditing: i === index }))
    );
  }

  function handleSave(index, field, value) {
    setNotes((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      syncStorage(updated);
      return updated;
    });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={notes.map((_, i) => i)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 sm:p-6">
            {notes.map((note, i) => (
              <SortableNote
                key={i}
                index={i}
                note={note}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onSave={handleSave}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <NavLink to="/">
        <button className="block mx-auto sm:ml-6 mb-6 bg-purple-700 text-white px-6 py-2 rounded-lg">
          Create New Note
        </button>
      </NavLink>
    </div>
  );
};
  