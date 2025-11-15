import { useParams, useNavigate } from "react-router-dom";
import CrewmateForm from "../components/CrewmateForm";
import { useCrewmates } from "../context/CrewmateContext";

export default function EditPage() {
  const { id } = useParams();
  const { crewmates, updateCrewmate, deleteCrewmate } = useCrewmates();
  const navigate = useNavigate();

  const crewmate = crewmates.find(c => c.id === id);

  if (!crewmate) return <p>Crewmate not found.</p>;

  return (
    <div>
      <h1>Edit Crewmate</h1>

      <CrewmateForm
        initialValues={crewmate}
        onSubmit={(data) => {
          updateCrewmate(id, data);
          navigate("/");
        }}
      />

      <button
        style={{ marginTop: "1rem", background: "red", color: "white" }}
        onClick={() => {
          deleteCrewmate(id);
          navigate("/");
        }}
      >
        Delete Crewmate
      </button>
    </div>
  );
}
