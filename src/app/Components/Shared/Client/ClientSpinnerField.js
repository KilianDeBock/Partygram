import { useQuery } from "@tanstack/react-query";
import { getClients } from "../../../../core/modules/client/api";
import AppSpinnerField from "../Form/AppSpinnerField";

const ClientSpinnerField = (props) => {
  const { data } = useQuery(["clients"], getClients);

  if (!data || !data.data) {
    return null;
  }

  return (
    <AppSpinnerField
      {...props}
      items={data.data.map((item) => ({ value: item.id, label: item.name }))}
    />
  );
};

export default ClientSpinnerField;
