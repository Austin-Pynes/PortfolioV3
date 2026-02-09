let visitorCount = 1042

export async function GET() {
  return Response.json({ count: visitorCount })
}

export async function POST() {
  visitorCount++
  return Response.json({ count: visitorCount })
}
