import * as Layout from "../../layouts";
import * as Component from "../../components";
import { useEffect, useState } from "react";
import * as DefaultData from "../../global/defaultData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_NEW_STORE } from "../../redux/feature/storeSlice";
import { AppDispatch } from "../../redux/store";

export const CreateNewStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, isSuccess, message } = useSelector((state: any) => state.store);
  const [formData, setFormData] = useState(DefaultData.NewStoreDetails);
  // Form Data
  const [storeAddressData, setStoreAddressData] = useState(DefaultData.NewAddressDetails);
  const [storeInfoData, setStoreInfoData] = useState(DefaultData.NewStoreDetails);
  const [storeChargesData, setStoreChargesData] = useState(DefaultData.NewStoreChargeDetails);

  function $updateData(e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<any>) {
    const { name, value } = e.target;
    setter((prev: any) => ({ ...prev, [name]: value }));
  }

  function $updateFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function $handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, currency } = storeInfoData;
    const { country, street, city, state, postalCode } = storeAddressData;

    // Check for the required fields
    if (!name || !currency) {
      return toast.warning("Missing one or more required Store information field, please try again");
    }
    if (!country || !street || !city || !state || !postalCode) {
      return toast.warning("Missing one or more required Store Address field, please try again");
    }
    dispatch(
      CREATE_NEW_STORE({
        ...storeInfoData,
        address: storeAddressData,
        charges: storeChargesData,
      })
    );
  }

  function $clearForm() {
    setFormData(DefaultData.NewStoreDetails);
    navigate(-1);
    return;
  }

  useEffect(() => {
    if (isError) {
      toast.warn(message);
      return;
    }
  }, [isError, dispatch]);

  return (
    <Layout.DashboardLayout>
      <div className="p-6">
        <Component.Store.NewStoreForm
          storeAddressData={storeAddressData}
          storeInfoData={storeInfoData}
          storeChargesData={storeChargesData}
          setStoreAddressData={setStoreAddressData}
          setStoreInfoData={setStoreInfoData}
          setStoreChargesData={setStoreChargesData}
          $updateData={$updateData}
          $handleSubmit={$handleSubmit}
          $clearForm={$clearForm}
        />
      </div>
    </Layout.DashboardLayout>
  );
};
