import { useParams, Link } from "react-router-dom";
import { useCrewmates } from "../context/CrewmateContext";

export default function DetailPage() {
  const { id } = useParams();
  const { crewmates } = useCrewmates();

  const crewmate = crewmates.find(c => c.id === id);

  if (!crewmate) return <p>Crewmate not found.</p>;

  return (
    <div>
      <h1>{crewmate.name}</h1>
      <p>Attribute: {crewmate.attribute}</p>
      <p>Created: {new Date(crewmate.createdAt).toLocaleString()}</p>

      <Link to={`/crewmate/${crewmate.id}/edit`}>Edit Crewmate</Link>
    </div>
  );
}
