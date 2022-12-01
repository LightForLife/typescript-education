import { Routes, Route, NavLink } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { BrowserRouter } from "react-router-dom";
import OtherPage from "./components/OtherPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/other">Other</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/users/:id" element={<TodoItemPage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
