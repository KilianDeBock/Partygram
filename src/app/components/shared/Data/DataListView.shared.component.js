import { FlatList } from "react-native";
import Divider from "../../design/List/Divider.design.component";
import EmptyView from "../../design/View/EmptyView.design.component";
import DataView from "./DataView.shared.component";

const DataListView = ({
  name,
  method,
  renderItem,
  emptyTitle,
  emptyDescription,
  emptyIcon,
  onAddItem,
  refreshControl,
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
            refreshControl={refreshControl}
          />
        )
      }
    />
  );
};

export default DataListView;
