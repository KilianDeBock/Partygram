import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../../core/hooks/useTitle";
import LoadingIndicator from "../../design/Loading/LoadingIndicator.design.component";
import ErrorMessage from "../../design/Text/ErrorMessage.design.component";
import CenteredView from "../../design/View/CenteredView.design.component";
import DefaultView from "../../design/View/DefaultView.design.component";

const DataView = ({ name, method, render, titleKey }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: name,
    queryFn: method,
  });

  useTitle(titleKey ? data?.data[titleKey] : null);

  if (isLoading) {
    return (
      <CenteredView>
        <LoadingIndicator />
      </CenteredView>
    );
  }

  if (isError) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  return render(data.data);
};

export default DataView;
