import { FavoritesSubScreens } from "./Favotites/Favorites.subscreens.navigator";
import { HomeSubScreens } from "./Home/Home.subscreens.navigator";
import { ProfileSubScreens } from "./Profile/Profile.subscreens.navigator";
import { SearchSubScreens } from "./Search/Search.subscreens.navigator";

export const AllSubScreens = [
  HomeSubScreens,
  SearchSubScreens,
  ProfileSubScreens,
  FavoritesSubScreens,
];

export const GetAllSubScreens = (Stack, navigation) => (
  // Cannot look due to key errors in loops.
  <>
    {HomeSubScreens(Stack, navigation)}
    {SearchSubScreens(Stack, navigation)}
    {ProfileSubScreens(Stack, navigation)}
    {FavoritesSubScreens(Stack, navigation)}
  </>
);
