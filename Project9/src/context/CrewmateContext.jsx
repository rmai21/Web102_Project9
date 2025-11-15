import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const CrewmateContext = createContext();

export function CrewmateProvider({ children }) {
  const [crewmates, setCrewmates] = useState([]);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase
      .from("crew")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setCrewmates(data);
  };

  useEffect(() => { fetchCrewmates() }, []);

  const addCrewmate = async (crewmate) => {
    const { data, error } = await supabase
      .from("crew")
      .insert([crewmate])
      .select()
      .single();
    if (!error) setCrewmates(prev => [data, ...prev]);
  };

  const updateCrewmate = async (id, updated) => {
    const { data, error } = await supabase
      .from("crew")
      .update(updated)
      .eq("id", id)
      .select()
      .single();
    if (!error) setCrewmates(prev => prev.map(c => c.id === id ? data : c));
  };

  const deleteCrewmate = async (id) => {
    const { error } = await supabase
      .from("crew")
      .delete()
      .eq("id", id);
    if (!error) setCrewmates(prev => prev.filter(c => c.id !== id));
  };

  return (
    <CrewmateContext.Provider value={{ crewmates, addCrewmate, updateCrewmate, deleteCrewmate }}>
      {children}
    </CrewmateContext.Provider>
  );
}

export function useCrewmates() {
  return useContext(CrewmateContext);
}
