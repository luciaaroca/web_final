import React from "react";


const Select = ({ onChange, selected }) => {
   const leagues = ["La Liga", "Premier League", "Serie A", "Bundesliga", "Ligue 1"]

  return   <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="">Todas las ligas</option>
      {leagues.map((league) => (
        <option key={league} value={league}>
          {league}
        </option>
      ))}
    </select>;
};

export default Select;
