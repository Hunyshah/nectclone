import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from '@/app/lib/prismadb'
import {compare} from 'bcrypt'
 const handler = NextAuth({
    providers:[
        Credentials(
            {
                id:'credentials',
                name:'Credentials'
                ,credentials:{
                    email:{
                        label:'email',
                        type:'text'
                    },
                    password:{
                        label:'password',
                        type:'password'
                    }
                },
                async authorize(credentials){
                    if (!credentials || credentials?.email || credentials?.password){
                        throw new Error('email or password required')
                    }
                    const user = await prismadb.user.findUnique({
                        where:{
                            email:credentials.email
                        }
                    })  
                    if (!user || !user.hashedpassword){
                        throw new Error("email does not exit")

                    }
                    const isCorrectPassword = await compare(credentials.password ,user.hashedpassword)
                    if (!isCorrectPassword){
                        throw new Error("incorrect password")
                    }
                    return user

                }

            }
        )
    ],
    pages:{
        signIn:'/auth'
    },
    debug:process.env.NODE_ENV === 'development',
    session:{
        strategy:'jwt'
    },
    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET
    },
    secret:process.env.NEXTAUTH_SECRET

})
export  {handler as GET , handler as POST}