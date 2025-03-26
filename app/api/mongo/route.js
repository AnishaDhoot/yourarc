import Feedback from "@/app/models/Feedback";
import dbconnect from "@/app/libs/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        const {name, feedback}=await req.json();
        await dbconnect();
        await Feedback.create({name, feedback});
        return NextResponse.json({message: "feedback created successfully"}, {status: 201});

    }catch(error){
        return NextResponse.json({error: "failed to create feedback"}, {status: 500});
    }
}