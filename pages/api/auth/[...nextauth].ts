import NextAuth, { User } from 'next-auth';
import { signIn } from 'next-auth/client';
import Providers from 'next-auth/providers';
import { redirect } from 'next/dist/server/api-utils';
import AuthenticationManager from '../../../ogame/AuthenticationManager';

import Test from '../../../ogame/test';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: 'OGame',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // const url = await authenticate(credentials.username, credentials.password);

        // Add logic here to look up the user from the credentials supplied
        const user: User = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };

        if (await AuthenticationManager.authenticate(credentials.username, credentials.password)) {
          // Any object returned will be saved in `user` property of the JWT

          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],
});
