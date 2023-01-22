import { SearchScreen } from "../../screens/Search/Search.screen";
import { Navigation } from "../../../core/navigation";

export const SearchSubScreens = (Stack, navigation) => (
  <>
    <Stack.Screen
      component={SearchScreen}
      name={Navigation.SEARCH_OVERVIEW}
      options={{
        title: "Search",
      }}
    />
  </>
);
