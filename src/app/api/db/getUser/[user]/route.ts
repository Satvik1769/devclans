import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { UserModel } from "@/model/schema";
import  { stringSchema } from "@/zod/zod.common"

async function handler(req:Request,{ params }:{ params : { user: string }}) {
  try{
    await dbConnect();
    
    const user  = params.user;
    stringSchema.parse(user);
    
    if (!user) {
        return NextResponse.json({ message: 'User not found' });
      }

   
    const u = await UserModel.find({
      username : user
    });
      
     
      return  NextResponse.json(u);
}
catch(error){
  return NextResponse.json(error);
}
}
export { handler as GET }