import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import {v4 as uuid} from 'uuid'

export default function CreateNote({setNote}) {
  const [title, seTitle] = useState("");
  const [details, setDetails] = useState("");
  const goTO = useNavigate()

  const handleSUbmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = {id: uuid(), title, details}
      //add note 
      setNote((prevNote) => [...prevNote, note]);
      console.log(note);
      // redirect home
      goTO("/")   

    } else {
      console.log("you havent entered a title or a detail");
    }
  };

  return (
    <section>
      <header className="create_note_header">
        <Link to={"/"} className="btn">
          <IoArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSUbmit}>
          
          Save
        </button>
        <button className="btn danger ">
          <RiDeleteBin6Line />
        </button>

        <form onSubmit={handleSUbmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => seTitle(e.target.value)}
            placeholder="title"
            autoFocus
          />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={28}
            placeholder=" note details"
          ></textarea>
        </form>
      </header>
    </section>
  );
}
