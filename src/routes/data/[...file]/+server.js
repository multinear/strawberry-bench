import { json } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import { join } from 'path';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  try {
    const filePath = join(process.cwd(), 'data', params.file);
    const content = await fs.readFile(filePath, 'utf-8');
    return json(JSON.parse(content));
  } catch (error) {
    console.error(error);
    return new Response('Not found', { status: 404 });
  }
} 