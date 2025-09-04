import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: { testId: string } }) {
  return NextResponse.json({ ok: true, id: params.testId })
}
