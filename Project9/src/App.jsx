import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import SummaryPage from "./pages/SummaryPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Summary</Link>
        <Link to="/create">Add Crewmate</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/crewmate/:id" element={<DetailPage />} />
        <Route path="/crewmate/:id/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
