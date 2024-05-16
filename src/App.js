import React from "react";
import "./App.css";
//import Tested from "./component/TestedForm1";
//import TestForm from "./component/TestForm";
//import TestForm2 from "./component/TestForm2";
//import NotelistPage from "./pages/NotelistPage";
//import EditNote from "./pages/EditNote";
import { BrowserRouter, Route,Link, Routes} from "react-router-dom";
//import CreateNote from "./pages/CreateNote";

function App() {
  // Initialize note state with null
  // const [note, setNote] = useState([]);
  // console.log(note)

  return (
    <main id="app">
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" exact element={<NotelistPage note={note} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNote={setNote} />}
          />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
      {/* 
    <Tested />
    <TestForm/>
    <TestForm2/>
       
    */}
    </main>
  );
}

export default App;
