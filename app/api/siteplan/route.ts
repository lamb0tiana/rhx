import { NextResponse } from 'next/server'
import site_plan from "@/app/_/data/site_plan";

export function GET() {
  return NextResponse.json(site_plan)
}
