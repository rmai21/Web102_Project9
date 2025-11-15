import { useState } from "react";

export default function CrewmateForm({ initialValues, onSubmit }) {
  const [name, setName] = useState(initialValues.name);
  const [attribute, setAttribute] = useState(initialValues.attribute);

  const attributes = ["Brave", "Smart", "Funny", "Strong"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, attribute });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
      <label>
        Crewmate Name:
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <div>
        <p>Select Attribute:</p>
        {attributes.map(attr => (
          <button
            key={attr}
            type="button"
            onClick={() => setAttribute(attr)}
            style={{
              background: attribute === attr ? "lightgreen" : "lightgray",
              marginRight: "8px"
            }}
          >
            {attr}
          </button>
        ))}
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
