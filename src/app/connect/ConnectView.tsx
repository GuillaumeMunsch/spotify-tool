import { Button } from "@radix-ui/themes";

type Props = {
  connectToSpotify: () => void;
};

export default function ConnectView({ connectToSpotify }: Props) {
  return <Button onClick={connectToSpotify}>Connect to Spotify</Button>;
}
