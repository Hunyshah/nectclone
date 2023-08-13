import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/app/lib/prismadb";
// import { POST } from "../auth/[...nextauth]/nextauth";
import { NextRequest,NextResponse } from "next/server";



type BodyData ={
  email:string;
  name:string;
  password:string;
}

export  async function POST(req:Request){

  // if (req.method !== 'POST') {
  //   console.log("post no send");
  //   return res?.status(400).end();
  // }
  try {
    const body = await req.json()
    const { email,name, password } = body;
    // const existinguser = await prismadb.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });
    // if (existinguser) {
    //   return res.status(402).json({ error: "we already have email" });
    // }
    const hashpassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        name: name,
        hashedpassword: hashpassword,
        image: "",
        emailverified: new Date(),
      },
    });
    // console.log("hope user created");
  return NextResponse.json(user);
  } catch (error) {
    console.log(error);
   
      }
}
