"use client";
import { useEffect, useState } from 'react';

interface Team {
  id: number; // Change to the appropriate type based on your schema
  team_name: string; // Adjust field names to match your schema
  // Add other fields as necessary
}

const TeamsPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);


  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.log(error);

      }
    };

    fetchTeams();
  }, []);


  return (
    <div>
      <h1>Football Teams</h1>
      <ul>
        {teams && teams.map((team) => (
          <li key={team.id}>{team.team_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsPage;
