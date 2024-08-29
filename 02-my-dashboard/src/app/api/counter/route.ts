import { NextResponse } from "next/server";


export async function GET(request: Request) {

    return NextResponse.json({ 
        count: 10,
        method: 'GET'
     })
} //RESTful API

export async function POST(request: Request) {

    return NextResponse.json({ 
        count: 777,
        method: 'POST'
     })
} //RESTful API