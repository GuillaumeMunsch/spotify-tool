"use client";

import { useContext } from "react";
import ConnectPage from "./connect/page";
import { useSpotifyAPIContext } from "./_components/api/spotify/SpotifyAPIContext";
import { Loader } from "./_components/ui";

export default function HomePage() {
  const spotifyAPIContext = useSpotifyAPIContext();
  return <Loader></Loader>;
  // if (!spotifyAPIContext) return <Loader />;
  // const { setSpotifyAPI, spotifyAPI } = spotifyAPIContext;
  // return <ConnectPage />;
}
