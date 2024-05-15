import React from "react";
import "./App.css";
import Header from "./component/Header";
import NotelistPage from "./pages/NotelistPage";
import NotePage from "./pages/NotePage";
import { Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact Component={<NotelistPage />} />
        <Route path="/note" Component={<NotePage />} />
      </Switch>
    </div>
  );
}

export default App;
