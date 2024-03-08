import SpotifyWebApi from "spotify-web-api-node";

export const spotifyHelperInitializer = async () => {
  const scopes = [
    "user-read-private",
    "user-read-email",
    "user-library-modify",
    "user-library-read",
  ];
  const state = "my-private-spotify-helper";
  const redirectUri = "http://localhost:3000/spotify-code";
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: redirectUri,
  });
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
  console.log("authorizeURL", authorizeURL);

  return spotifyApi;
};
