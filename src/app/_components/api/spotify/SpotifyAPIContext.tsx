import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { SpotifyAPI } from "./SpotifyAPI";

type Props = {} & PropsWithChildren;

type SpotifyAPIContextType = {
  spotifyAPI: SpotifyAPI;
  setSpotifyAPI: React.Dispatch<React.SetStateAction<SpotifyAPI>>;
};

const SpotifyAPIContext = createContext<SpotifyAPIContextType | undefined>(
  undefined
);

export const SpotifyAPIProvider = ({ children }: Props) => {
  const redirectUri = "http://localhost:3000/spotify-code";
  const [spotifyAPI, setSpotifyAPI] = useState<SpotifyAPI>(
    new SpotifyAPI({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: redirectUri,
    })
  );

  return (
    <SpotifyAPIContext.Provider value={{ spotifyAPI, setSpotifyAPI }}>
      {children}
    </SpotifyAPIContext.Provider>
  );
};

export const useSpotifyAPIContext = () => {
  return useContext(SpotifyAPIContext);
};
