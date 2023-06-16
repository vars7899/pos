interface Address {
  street: string;
  addressLine?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface StoreDays {
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thur: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}

interface NewStoreDetails {
  name: string;
  slogan?: string | undefined;
  website?: string | undefined;
  currency: string;
  address: Address;
  status: boolean;
  days: StoreDays;
  allowPickupOrders: boolean;
  charges: {
    taxes: number;
  };
}
