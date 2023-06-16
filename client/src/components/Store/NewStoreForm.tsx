import * as Component from "../";
import Switch from "react-switch";
import Currency from "iso-country-currency";
import * as Types from "../../global/types";

interface NewStoreFormProps {
  storeAddressData: Types.Address;
  storeInfoData: Types.NewStoreInfo;
  storeChargesData: Types.StoreCharges;

  $updateData(e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<any>): void;
  $handleSubmit(e: React.FormEvent): void;
  $clearForm(): void;

  setStoreInfoData: React.Dispatch<React.SetStateAction<Types.NewStoreInfo>>;
  setStoreChargesData: React.Dispatch<React.SetStateAction<Types.StoreCharges>>;
  setStoreAddressData: React.Dispatch<React.SetStateAction<Types.Address>>;
}

export const NewStoreForm = ({
  $handleSubmit,
  $clearForm,
  $updateData,
  storeInfoData,
  storeAddressData,
  storeChargesData,
  setStoreInfoData,
  setStoreChargesData,
  setStoreAddressData,
}: NewStoreFormProps) => {
  return (
    <form className="grid gap-3" onSubmit={$handleSubmit}>
      <Component.Default.InfoBox title="Store Information">
        <Component.Default.OptionBox
          title="store name"
          subtitle="Add your store name, store has a max character limit of 100"
          required
        >
          <Component.Default.LimitInput
            name="name"
            value={storeInfoData.name}
            inputType="text"
            placeHolder="Eg. Amazon store"
            onChange={(e) => $updateData(e, setStoreInfoData)}
            limit
            maxLength={100}
            minLength={4}
            className="w-[100%]"
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-4"
          title="slogan"
          subtitle="Add slogan that best describe your store"
        >
          <Component.Default.LimitInput
            name="slogan"
            value={storeInfoData.slogan}
            inputType="text"
            onChange={(e) => $updateData(e, setStoreInfoData)}
            placeHolder="Eg. Easy and fast shopping"
            limit
            maxLength={200}
            minLength={0}
            className="w-[100%]"
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox className="mt-4" title="store URL" subtitle="Your store external website">
          <Component.Default.LimitInput
            name="website"
            value={storeInfoData.website}
            inputType="url"
            onChange={(e) => $updateData(e, setStoreInfoData)}
            placeHolder="Eg. www.amazon.com"
            className="w-[100%]"
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-6"
          title="Country of operation"
          subtitle="In what country does your store operate?"
          required
        >
          <select
            name="country"
            onChange={(e) => {
              setStoreAddressData((prev) => ({
                ...prev,
                country: e.target.value,
              }));
              setStoreInfoData((prev) => ({
                ...prev,
                currency: Currency.getAllInfoByISO(e.target.value).currency,
              }));
            }}
            className="border-[1px] border-zinc-200 bg-neutral-900 rounded-md text-base text-zinc-950 px-[16px] py-[10px] dark:border-neutral-600 dark:text-neutral-400 dark:placeholder:text-neutral-600 dark:focus:border-sky-600 block w-full"
          >
            <option value="" selected>
              Please Select you operational country
            </option>
            {Currency.getAllISOCodes().map((curr) => (
              <option key={curr.iso} value={curr.iso}>
                {curr.countryName}
              </option>
            ))}
          </select>
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-6"
          title="Currency"
          subtitle="In what currency does your store operate?"
          required
        >
          {storeAddressData.country ? (
            <Component.Default.LimitInput
              name="currency"
              value={Currency.getAllInfoByISO(storeAddressData.country).currency}
              inputType="text"
              placeHolder="Eg. ₹ INR"
              className="w-[100%]"
              disabled
            />
          ) : null}
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-6"
          title="Store Address"
          subtitle="Providing the address details for your store will assist us in getting in touch with you if needed"
          required
        >
          <div className="grid grid-flow-row gap-4 w-[100%]">
            <Component.Default.LimitInput
              name="street"
              value={storeAddressData.street}
              inputType="text"
              onChange={(e) => $updateData(e, setStoreAddressData)}
              placeHolder="Street Address"
            />
            <Component.Default.LimitInput
              name="addressLine"
              value={storeAddressData.addressLine}
              inputType="text"
              onChange={(e) => $updateData(e, setStoreAddressData)}
              placeHolder="Address Line"
            />
            <Component.Default.LimitInput
              name="city"
              value={storeAddressData.city}
              inputType="text"
              onChange={(e) => $updateData(e, setStoreAddressData)}
              placeHolder="City"
            />
            <Component.Default.LimitInput
              name="state"
              value={storeAddressData.state}
              inputType="text"
              onChange={(e) => $updateData(e, setStoreAddressData)}
              placeHolder="State / Province / Region"
            />
            <Component.Default.LimitInput
              name="postalCode"
              value={storeAddressData.postalCode}
              inputType="text"
              onChange={(e) => $updateData(e, setStoreAddressData)}
              placeHolder="Postal Code"
            />
          </div>
        </Component.Default.OptionBox>
      </Component.Default.InfoBox>
      <Component.Default.InfoBox title="Store schedule">
        <Component.Default.OptionBox
          title="status"
          subtitle="The status of your store indicates if it is open or closed. You may choose the status based on its current condition. Status does not imply the operational hours."
          required
        >
          <div className="flex">
            <button
              type="button"
              className={`optionBtn mr-4 ${storeInfoData.status ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, status: true }))}
            >
              Active
            </button>
            <button
              type="button"
              className={`optionBtn ${!storeInfoData.status ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, status: false }))}
            >
              Inactive
            </button>
          </div>
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-4"
          title="Operating Days"
          subtitle="Select the operational days from the list"
        >
          <div>
            <button
              type="button"
              className={`optionBtn ${storeInfoData.days.mon ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, mon: !prev.days.mon } }))}
            >
              Mon
            </button>
            <button
              type="button"
              className={`optionBtn ml-4  ${storeInfoData.days.tue ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, tue: !prev.days.tue } }))}
            >
              Tue
            </button>
            <button
              type="button"
              className={`optionBtn ml-4  ${storeInfoData.days.wed ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, wed: !prev.days.wed } }))}
            >
              Wed
            </button>
            <button
              type="button"
              className={`optionBtn ml-4  ${storeInfoData.days.thur ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, thur: !prev.days.thur } }))}
            >
              Thur
            </button>
            <button
              type="button"
              className={`optionBtn ml-4  ${storeInfoData.days.fri ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, fri: !prev.days.fri } }))}
            >
              Fri
            </button>
            <button
              type="button"
              className={`optionBtn ml-4  ${storeInfoData.days.sat ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, sat: !prev.days.sat } }))}
            >
              Sat
            </button>
            <button
              type="button"
              className={`optionBtn ml-4  ${storeInfoData.days.sun ? "optionBtnSelected" : null}`}
              onClick={() => setStoreInfoData((prev) => ({ ...prev, days: { ...prev.days, sun: !prev.days.sun } }))}
            >
              Sun
            </button>
          </div>
        </Component.Default.OptionBox>
      </Component.Default.InfoBox>
      <Component.Default.InfoBox title="Store Features">
        <Component.Default.OptionBox title="Pickup Orders" subtitle="Allow customer to place pickup store" required>
          <div className="flex items-center">
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              checked={storeInfoData.allowPickupOrder}
              onChange={(val) => setStoreInfoData((prev) => ({ ...prev, allowPickupOrder: val }))}
            />
            <p className="dark:text-neutral-500 ml-4">Order pickup feature at the POS</p>
          </div>
        </Component.Default.OptionBox>
      </Component.Default.InfoBox>
      <Component.Default.InfoBox title="Store Expenses">
        <Component.Default.OptionBox
          title="Taxes"
          subtitle="Please state the percentage of tax deductible on each order, please state the percentage"
          required
        >
          <Component.Default.LimitInput
            name="taxes"
            value={storeChargesData.taxes}
            inputType="number"
            onChange={(e) => $updateData(e, setStoreChargesData)}
            placeHolder="Eg. 12"
            className="w-[100%]"
            min={0}
          />
        </Component.Default.OptionBox>
      </Component.Default.InfoBox>
      <div className="flex items-center justify-end">
        <Component.Default.Button type="filled" onClick={$clearForm}>
          Cancel
        </Component.Default.Button>
        <Component.Default.Button type="filled" className="ml-4 bg-green-600 dark:bg-green-600" actionType="submit">
          Create Store
        </Component.Default.Button>
      </div>
    </form>
  );
};
