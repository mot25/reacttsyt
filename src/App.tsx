import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import UserItemPage from "./components/UserItemPage";

function App() {
  return (
    <BrowserRouter>
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="users">UserPage</Link>
        <Link to="todos">TodoPage</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
