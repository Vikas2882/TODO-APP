import { NextResponse } from "next/server";
import { connectDb } from "../lib/config/db";
import ToDo_Model from "../lib/model/ToDomodel";
const LoadDB=async()=>{
await connectDb();
}
LoadDB();
export async function GET(request){
    const todos = await ToDo_Model.find({});

    return NextResponse.json({todos:todos});
}
export async function DELETE(request){
    console.log(request);
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await ToDo_Model.findByIdAndDelete(mongoId);

    return NextResponse.json({msg:"ToDo Deleted"});
}
export async function PUT(request){
    
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await ToDo_Model.findByIdAndUpdate(mongoId,{
        $set:{
            isCompleted:true
        }
    });

    return NextResponse.json({msg:"ToDo is completed"});
}
export async function POST(request){
    const{title,description}= await request.json();
    await ToDo_Model.create({
        title,
        description
    }) 
  return NextResponse.json({msg:"ToDo is created"});
}

