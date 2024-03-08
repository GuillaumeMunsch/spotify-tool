import SpotifyWebApi from "spotify-web-api-node";

export class SpotifyAPI {
  private spotifyApi: SpotifyWebApi;
  constructor({
    clientId,
    clientSecret,
    redirectUri,
  }: {
    clientId?: string;
    clientSecret?: string;
    redirectUri: string;
  }) {
    this.spotifyApi = new SpotifyWebApi({
      clientId,
      clientSecret,
      redirectUri,
    });
  }

  async loginWithCode(code: string) {
    const credentials = await this.spotifyApi.authorizationCodeGrant(code);
    console.log("credentials", credentials);

    if (!credentials.body?.access_token) {
      console.log(
        "Something went wrong when retrieving an access token",
        credentials
      );
      return null;
    }
    this.spotifyApi.setAccessToken(credentials.body["access_token"]);
    this.spotifyApi.setRefreshToken(credentials.body["refresh_token"]);
    console.log("spotifyApi initialized");

    return this.spotifyApi;
  }

  async generatePlaylists(): Promise<any> {
    const myTracks = await this.getMySavedTracks();
    console.log("My tracks", myTracks);
  }

  async getMySavedTracks(): Promise<SpotifyApi.UsersSavedTracksResponse> {
    const data = await this.spotifyApi.getMySavedTracks();
    return data.body;
  }

  async getUser(userId: string) {
    const data = await this.spotifyApi.getUser(userId);
    return data.body;
  }
}
