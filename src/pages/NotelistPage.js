import React from "react";
import { CiSearch } from "react-icons/ci";
import Listitem from "../component/Listitem";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

function NotelistPage({ notes }) {
  if (!notes) {
    return <div>No notes available</div>;
  }

  return (
    <section>
      <header className="notes__header">
        <h2>MY Notes</h2>
        <input type="text" autoFocus placeholder="keyword...." />
        <button className="btn">
          <CiSearch />
        </button>
      </header>

      <div className="notes_container">
        {notes.map((note) => (
          <Listitem key={note.id} note={note} />
        ))}
      </div>
      <Link to={"/create-note"} className="btn add_btn">
        <BsPlusLg />
      </Link>
    </section>
  );
}

export default NotelistPage;
