import { NextResponse } from 'next/server'
import site_plan from "@/app/data/site_plan";

export function GET() {
  return NextResponse.json(site_plan)
}
