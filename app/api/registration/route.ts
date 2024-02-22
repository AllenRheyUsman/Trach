// route.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';


// Define your POST method
export  async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { name } = body;

    // Validate if 'name' is present in the request body
    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    // Create a new user in the database
    const agent = await prisma.agent.create({
      data: {
        name,
      },
    });

    return NextResponse.json(agent);
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
