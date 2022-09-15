import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'colmeiaudesc@gmail.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = {
          id: 0,
          name: 'Colmeia UDESC',
          email: 'colmeiaudesc@gmail.com'
        };

        if (credentials?.email === 'colmeiaudesc@gmail.com' && credentials?.password === 'colmeiaudesc') {
          return user;
        }

        return null;
      }
    })
  ]
};

export default NextAuth(authOptions);
