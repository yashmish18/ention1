import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from 'utils/db'
import bcrypt from 'bcrypt'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try{
                    const client = await clientPromise;
                    const col = await client.db('ention').collection('users')

                    const role = req.url === '/login' ? 'user' : 'agent'
                    let user = await col.findOne({email: req.body?.email})
                    
                    if(user && bcrypt.compareSync(req.body?.password, user.password)){
                        delete user.password
                        return {...user}
                    }
                    return null
                }catch(err) {
                    console.log(`🚀 ~ file: [...nextauth].js:27 ~ authorize ~ err`, err)
                    return null
                }
            }
        })
    ],
}

export default NextAuth(authOptions)