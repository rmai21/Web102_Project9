import { Link } from "react-router-dom";
import { useCrewmates } from "../context/CrewmateContext";

export default function SummaryPage() {
    const { crewmates } = useCrewmates();

    return (
        <div>
            <h1>Crewmate Summary</h1>

            {crewmates.length === 0 && <p>No crewmates yet!</p>}

            <ul style={{ listStyle: "none", padding: 0 }}>
                {crewmates.map(c => (
                    <li key={c.id} style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem 0" }}>
                        <Link to={`/crewmate/${c.id}`}>
                            <strong>{c.name}</strong> — {c.attribute}
                        </Link>
                        <br />
                        <Link to={`/crewmate/${c.id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
