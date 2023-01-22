import { FavoritesScreen } from "../../screens/Favorites/Favorites.screen";
import { Navigation } from "../../../core/navigation";

export const FavoritesSubScreens = (Stack, navigation) => (
  <>
    <Stack.Screen
      component={FavoritesScreen}
      name={Navigation.FAVORITES_OVERVIEW}
      options={{
        title: "Favorites",
      }}
    />
  </>
);
