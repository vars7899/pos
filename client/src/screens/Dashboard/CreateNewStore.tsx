import * as Layout from "../../layouts";
import * as Component from "../../components";

export const CreateNewStore = () => {
  return (
    <Layout.DashboardLayout>
      <div className="p-6">
        <Component.Store.NewStoreForm />
      </div>
    </Layout.DashboardLayout>
  );
};
