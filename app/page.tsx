"use client";
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Team {
  id: number;
  team_name: string;
}

const TeamsPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams');
        if (!response.ok) {
          throw new Error('Error :Failed to fetch teams from database');
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
      <div className="">
        <Navbar />
      </div>
      <h1 className='text-center text-green-500 font-semibold p-3 text-lg'>
        Mak Football League Standings
      </h1>

      <Table className="text-[18px]">
        <TableCaption>Standings as of November</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Position</TableHead>
            <TableHead>Club</TableHead>
            <TableHead>MP</TableHead>
            <TableHead>W</TableHead>
            <TableHead>D</TableHead>
            <TableHead>L</TableHead>
            <TableHead>GF</TableHead>
            <TableHead>GA</TableHead>
            <TableHead>GD</TableHead>
            <TableHead>Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { position: 1, name: "CSE Literals", mp: 4, w: 3, d: 1, l: 0, gf: 7, ga: 3, gd: 4, pts: 10 },
            { position: 2, name: "Mechanical ", mp: 4, w: 3, d: 0, l: 1, gf: 6, ga: 2, gd: 4, pts: 9 },
            { position: 3, name: "Law Legends", mp: 4, w: 2, d: 1, l: 1, gf: 5, ga: 3, gd: 2, pts: 7 },
            { position: 4, name: "Engineering Eaglets", mp: 4, w: 2, d: 1, l: 1, gf: 4, ga: 3, gd: 1, pts: 7 },
            { position: 5, name: "Science Scholars", mp: 4, w: 2, d: 0, l: 2, gf: 5, ga: 5, gd: 0, pts: 6 },
            { position: 6, name: "Business Buffs", mp: 4, w: 1, d: 1, l: 2, gf: 3, ga: 4, gd: -1, pts: 4 },
            { position: 7, name: "Arts Avengers", mp: 4, w: 1, d: 1, l: 2, gf: 2, ga: 5, gd: -3, pts: 4 },
            { position: 8, name: "Medicine Masters", mp: 4, w: 1, d: 0, l: 3, gf: 3, ga: 7, gd: -4, pts: 3 },
            { position: 9, name: "Agriculture Aces", mp: 4, w: 0, d: 1, l: 3, gf: 2, ga: 6, gd: -4, pts: 1 },
            { position: 10, name: "Education Elves", mp: 4, w: 0, d: 1, l: 3, gf: 1, ga: 7, gd: -6, pts: 1 },
          ].map((team) => (
            <TableRow key={team.position}>
              <TableCell className="font-medium">{team.position}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.mp}</TableCell>
              <TableCell>{team.w}</TableCell>
              <TableCell>{team.d}</TableCell>
              <TableCell>{team.l}</TableCell>
              <TableCell>{team.gf}</TableCell>
              <TableCell>{team.ga}</TableCell>
              <TableCell>{team.gd}</TableCell>
              <TableCell>{team.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col">
        <h2 className="p-2">
          Keys
        </h2>
        <div className=" gap-10 grid grid-cols-4 bg-gray-300 m-2 text-center w-[600px]">

          <p className="">MP- Matches Played</p>
          <p className="">W- Wins</p>
          <p className="">D- Draws</p>
          <p className="">L- Loses</p>
          <p className="">GD- Goal Difference</p>
          <p className="">Pts- Points earned</p>
          <p className="">GF- Goals scoredr</p>
          <p className="">GA- Goals Against</p>

        </div>

      </div>

      <ul className='hidden'>
        {teams && teams.map((team) => (
          <li key={team.id}>{team.team_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsPage;
