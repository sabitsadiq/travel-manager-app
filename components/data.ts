interface tableDataProps {
  name: string;
  email: string;
  phone: string | number;
  address: string | number;
  id: string;
}

interface paymentDataProps {
  name: string;
  item: string;
  id: string;
  status: string;
  amount: number;
  createDate: string;
}
interface paymenLinkProps {
  id: string;
  name: string;
  path: string;
}

export const tableData: tableDataProps[] = [
  {
    id: "0",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
  {
    id: "1",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
  {
    id: "2",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
  {
    id: "3",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
  {
    id: "4",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
  {
    id: "5",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
  {
    id: "6",
    name: "Adegoke Oluwadailare",
    email: " adegoketemitope1909@gmail.com",
    phone: "08160730668",
    address: "No.2, Olonade Close, Monato,Ibadan,Oyo State,Nigeria.",
  },
];

export const paymentData: paymentDataProps[] = [
  {
    id: "0",
    name: "Adegoke Oluwadailare",
    item: "Registration Fee",
    createDate: "11 / 4 / 2021",
    amount: 21000,
    status: "pending",
  },
  {
    id: "1",
    name: "Adegoke Oluwadailare",
    item: "Consultant Fee",
    createDate: "11 / 4 / 2021",
    amount: 21000,
    status: "paid",
  },
  {
    id: "2",
    name: "Adegoke Oluwadailare",
    item: "Registration Fee",
    createDate: "11 / 4 / 2021",
    amount: 21000,
    status: "drafted",
  },
  {
    id: "3",
    name: "Adegoke Oluwadailare",
    item: "Consultant Fee",
    createDate: "11 / 4 / 2021",
    amount: 21000,
    status: "rejected",
  },
  {
    id: "4",
    name: "Adegoke Oluwadailare",
    item: "Consultant Fee",
    createDate: "11 / 4 / 2021",
    amount: 21000,
    status: "cancelled",
  },
];

export const paymentLinkNav: paymenLinkProps[] = [
  {
    id: "0",
    name: "All status",
    path: "payment",
  },
  {
    id: "1",
    name: "Draft",
    path: "payment",
  },
  {
    id: "2",
    name: "Pending",
    path: "payment",
  },
  {
    id: "3",
    name: "Paid",
    path: "payment",
  },
  {
    id: "4",
    name: "Rejected",
    path: "payment",
  },
  {
    id: "5",
    name: "Cancelled",
    path: "payment",
  },
];
