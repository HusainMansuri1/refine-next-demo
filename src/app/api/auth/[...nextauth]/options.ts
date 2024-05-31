import Auth0Provider from "next-auth/providers/auth0";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    Auth0Provider({
      clientId: `FosOFa9i24lIP4fovVie6iqEwSk2XKYO`,
      clientSecret: `cbgHB7B-a-pC1qn4lid2qjNRE0Mvg9_-QwMALMoQgSeqLs4jR-QddbJyU8Kvj0Pf`,
      issuer: `https://dev-v61voas4v4g2h3o0.us.auth0.com`,
    }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
//   callbacks: {
//     async redirect(url:any, baseUrl:any) {
//         // Redirect to the base URL if the URL is unsafe
        
//         if (url.url.startsWith(url.baseUrl)) {
//             return url.url;
//         } else if (url.url.startsWith('/')) {
//             return new URL(url.url, url.baseUrl).toString();
//         }
//         return url.baseUrl;
//     },
 
// },
};

export default authOptions;
