import * as Network from "expo-network";
import { useEffect, useState } from "react";
import { Popup } from "../../Design/Popup/Popup";

export const NetworkCheck = () => {
  const [network, setNetwork] = useState(null);

  useEffect(() => {
    (async () => {
      const networkState = await Network.getNetworkStateAsync();
      setNetwork(networkState);
    })();
  }, []);

  if (!network || (network.isConnected && network.isInternetReachable)) {
    return null;
  }

  return <Popup text="No internet connection" />;
};
