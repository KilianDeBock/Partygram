import { Navigation } from "../../core/navigation";
import { FavoritesNavigator } from "./Favotites/Favorites.navigator";
import { HomeNavigator } from "./Home/Home.navigator";
import { ProfileNavigator } from "./Profile/Profile.navigator";
import { SearchNavigator } from "./Search/Search.navigator";

export const AllNavigators = [
  {
    name: Navigation.HOME,
    navigator: HomeNavigator,
  },
  {
    name: Navigation.SEARCH,
    navigator: SearchNavigator,
  },
  {
    name: Navigation.PROFILE,
    navigator: ProfileNavigator,
  },
  {
    name: Navigation.FAVORITES,
    navigator: FavoritesNavigator,
  },
];

export const GetAllNavigators = (Tab, navigation) => (
  <>
    {AllNavigators.map(({ name, navigator }) => (
      <Tab.Screen
        key={name}
        component={navigator}
        name={name}
        options={{ headerShown: false }}
      />
    ))}
  </>
);
