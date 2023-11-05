import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../app/firebase'

export const authOptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                return await signInWithEmailAndPassword(auth, (credentials).email || '', (credentials).password || '')
                    .then(userCredential => {
                        if (userCredential.user) {
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch(error => (console.log(error)))
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error);
                    });
            }
        })
    ],
}

export default NextAuth(authOptions)
