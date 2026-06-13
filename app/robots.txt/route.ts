import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
  const body = `User-agent: *\nDisallow:\nSitemap: ${baseUrl}/sitemap.xml\n`;
  return new NextResponse(body, { headers: { 'Content-Type': 'text/plain' } });
}
