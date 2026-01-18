import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { NotesPage } from "./pages/NotesPage";
import { FaAngleRight, FaStickyNote } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required");
      return;
    }

    toast.success("Note Added!");

    const oldData = JSON.parse(localStorage.getItem("data")) || [];
    const newData = [...oldData, { title, discription: description }];
    localStorage.setItem("data", JSON.stringify(newData));

    setTitle("");
    setDescription("");
  }

  return (
    <>
      <ToastContainer position="bottom-right" />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
                {/* Create Note */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-5 sm:p-6 rounded-xl shadow-lg w-full max-w-sm"
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaStickyNote className="text-blue-500" />
                    Create Note
                  </h2>

                  <input
                    className="border w-full mb-3 p-2 rounded focus:ring-2 focus:ring-blue-400"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <textarea
                    className="border w-full mb-4 p-2 rounded resize-none h-24 focus:ring-2 focus:ring-blue-400"
                    placeholder="Note Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded">
                    Create Note
                  </button>
                </form>

                {/* Notes Button */}
                <NavLink to="/notes">
                  <button className="flex items-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg">
                    Notes <FaAngleRight />
                  </button>
                </NavLink>
              </div>
            </div>
          }
        />

        {/* NOTES PAGE */}
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </>
  );
}
