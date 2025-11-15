import CrewmateForm from "../components/CrewmateForm";
import { useCrewmates } from "../context/CrewmateContext";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const { addCrewmate } = useCrewmates();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create a Crewmate</h1>
      <CrewmateForm
        initialValues={{ name: "", attribute: "Brave", color: "Pink"}}
        onSubmit={(data) => {
          addCrewmate(data);
          navigate("/");
        }}
      />
    </div>
  );
}
