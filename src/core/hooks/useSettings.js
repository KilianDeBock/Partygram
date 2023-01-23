import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useSettings = () => {
  const [update, setUpdate] = useState(false);
  const [settings, setSettings] = useState({
    showLikes: true,
    showStories: true,
    settingsReceived: false,
  });

  const getSettings = async () => {
    let likes = null;
    let stories = null;
    try {
      const r = await AsyncStorage.getItem("@show_likes");
      if (r !== null) {
        likes = r !== "false";
      }
    } catch (e) {}
    try {
      const r = await AsyncStorage.getItem("@show_stories");
      if (r !== null) {
        stories = r !== "false";
      }
    } catch (e) {}
    if (likes !== null && stories !== null) {
      setSettings({ showLikes: likes, showStories: stories });
    } else if (likes !== null) {
      setSettings({ ...settings, showLikes: likes });
    } else if (stories !== null) {
      setSettings({ ...settings, showStories: stories });
    }
    setSettings((s) => ({ ...s, settingsReceived: true }));
  };

  const updateSettings = () => {
    setSettings((s) => ({ ...s, settingsReceived: false }));
    setUpdate(!update);
  };

  useEffect(() => {
    getSettings();
  }, [update]);

  useEffect(() => {
    getSettings();
  }, []);

  return { settings, updateSettings };
};
