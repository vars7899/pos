import React, { useState } from "react";
import * as Component from "../";
import Currency from "iso-country-currency";

export const NewStoreForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    website: "",
    currency: "",
    country: "",
    status: false,
    days: {
      mon: false,
      tue: false,
      wed: false,
      thur: false,
      fri: false,
      sat: false,
      sun: false,
    },
    street: "",
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
  });

  function $updateFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  console.log(formData);

  return (
    <div className="grid gap-3">
      <Component.Default.InfoBox title="Store Information">
        <Component.Default.OptionBox
          title="store name"
          subtitle="Add your store name, store has a max character limit of 20"
          required
        >
          <Component.Default.LimitInput
            name="name"
            value={formData.name}
            inputType="text"
            placeHolder="Eg. Amazon store"
            onChange={$updateFormData}
            limit
            maxLength={20}
            minLength={4}
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-4"
          title="slogan"
          subtitle="Add slogan that best describe your store"
        >
          <Component.Default.LimitInput
            name="slogan"
            value={formData.slogan}
            inputType="text"
            onChange={$updateFormData}
            placeHolder="Eg. Easy and fast shopping"
            limit
            maxLength={80}
            minLength={0}
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox className="mt-4" title="store URL" subtitle="Your store external website">
          <Component.Default.LimitInput
            name="website"
            value={formData.website}
            inputType="url"
            onChange={$updateFormData}
            placeHolder="Eg. www.amazon.com"
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-6"
          title="Country of operation"
          subtitle="In what country does your store operate?"
          required
        >
          <select
            name="currency"
            onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
            className="border-[1px] border-zinc-200 bg-neutral-900 rounded-md text-base text-zinc-950 px-[16px] py-[10px] dark:border-neutral-600 dark:text-neutral-400 dark:placeholder:text-neutral-600 dark:focus:border-sky-600 block w-full"
          >
            {Currency.getAllISOCodes().map((curr) => (
              <option key={curr.numericCode} value={curr.iso}>
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
          <Component.Default.LimitInput
            name="currency"
            value={formData.country ? Currency.getAllInfoByISO(formData.country).currency : ""}
            inputType="text"
            onChange={$updateFormData}
            placeHolder="Eg. ₹ INR"
            disabled
          />
        </Component.Default.OptionBox>
        <Component.Default.OptionBox
          className="mt-6"
          title="Store Address"
          subtitle="Providing the address details for your store will assist us in getting in touch with you if needed"
          required
        >
          <div className="grid grid-flow-row gap-4">
            <Component.Default.LimitInput
              name="street"
              value={formData.street}
              inputType="text"
              onChange={$updateFormData}
              placeHolder="Street Address"
              disabled
            />
            <Component.Default.LimitInput
              name="addressLine"
              value={formData.addressLine}
              inputType="text"
              onChange={$updateFormData}
              placeHolder="Address Line"
              disabled
            />
            <Component.Default.LimitInput
              name="city"
              value={formData.city}
              inputType="text"
              onChange={$updateFormData}
              placeHolder="City"
              disabled
            />
            <Component.Default.LimitInput
              name="state"
              value={formData.state}
              inputType="text"
              onChange={$updateFormData}
              placeHolder="State / Province / Region"
              disabled
            />
            <Component.Default.LimitInput
              name="postalCode"
              value={formData.postalCode}
              inputType="text"
              onChange={$updateFormData}
              placeHolder="Postal Code"
              disabled
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
              className={`optionBtn mr-4 ${formData.status ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, status: true }))}
            >
              Active
            </button>
            <button
              className={`optionBtn ${!formData.status ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, status: false }))}
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
              className={`optionBtn ${formData.days.mon ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, mon: !prev.days.mon } }))}
            >
              Mon
            </button>
            <button
              className={`optionBtn ml-4  ${formData.days.tue ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, tue: !prev.days.tue } }))}
            >
              Tue
            </button>
            <button
              className={`optionBtn ml-4  ${formData.days.wed ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, wed: !prev.days.wed } }))}
            >
              Wed
            </button>
            <button
              className={`optionBtn ml-4  ${formData.days.thur ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, thur: !prev.days.thur } }))}
            >
              Thur
            </button>
            <button
              className={`optionBtn ml-4  ${formData.days.fri ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, fri: !prev.days.fri } }))}
            >
              Fri
            </button>
            <button
              className={`optionBtn ml-4  ${formData.days.sat ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, sat: !prev.days.sat } }))}
            >
              Sat
            </button>
            <button
              className={`optionBtn ml-4  ${formData.days.sun ? "optionBtnSelected" : null}`}
              onClick={() => setFormData((prev) => ({ ...prev, days: { ...prev.days, sun: !prev.days.sun } }))}
            >
              Sun
            </button>
          </div>
        </Component.Default.OptionBox>
      </Component.Default.InfoBox>
    </div>
  );
};
