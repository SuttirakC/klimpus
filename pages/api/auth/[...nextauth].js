import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                // console.log('credentials', credentials)

                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()

                // console.log(data)

                if (data.response.message === 'ok') {
                    // console.log(data.response.user)
                    return data.response.user
                }
                return null
            }
        })
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
    callbacks: {
        async jwt({ token, user, account }) {
            // console.log(user)
            if (account) {
                token.accessToken = account.access_token
                token.user = user
            }
            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.user = token.user
            return session
        }
    },
    pages: {
        signIn: '../../auth/login',
        // signOut: '../../auth/login',
        // error: '/auth/error',
    }
}
export default NextAuth(authOptions)