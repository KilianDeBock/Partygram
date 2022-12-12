import { FlatList } from "react-native";
import Divider from "../../Design/List/Divider";
import DataView from "./DataView";
import EmptyView from "../../Design/View/EmptyView";

const DataListView = ({
  name,
  method,
  renderItem,
  emptyTitle,
  emptyDescription,
  emptyIcon,
  onAddItem,
}) => {
  return (
    <DataView
      name={name}
      method={method}
      render={(data) =>
        data.length === 0 ? (
          <EmptyView
            title={emptyTitle}
            description={emptyDescription}
            icon={emptyIcon}
            onPress={onAddItem}
          />
        ) : (
          <FlatList
            ItemSeparatorComponent={() => <Divider />}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )
      }
    />
  );
};

export default DataListView;
