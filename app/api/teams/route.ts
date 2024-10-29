import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the import path if needed

// Named export for GET method
export async function GET() {
  try {
    const teams = await prisma.teams.findMany(); // Assuming your model is called `team`
    return NextResponse.json(teams); // Return the teams as JSON
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch teams' }, { status: 500 });
  }
}
