import { BiTrash } from "react-icons/bi";

export const Headings = [
 " Amount",
  "Tracking Number",
  "Order Date",
 " Status",
  "Actions" 
];
export const RefundData = [
  {
    amount: "2500",
    trackingNO: "1122334455ASD",
    OrderDate: "10/12/12",
    Status: "APPROVED",
    Action: <BiTrash size={25} color="red" />,
  },
  {
    amount: "2500",
    trackingNO: "1122334455ASD",
    OrderDate: "10/12/12",
    Status: "PENDING",
    Action: <BiTrash size={25} color="red" />,
  },
  {
    email: "faris@faris.com",
    amount: "2500",
    trackingNO: "1122334455ASD",
    OrderDate: "10/12/12",
    Status: "ON_HOLD",
    Action: <BiTrash size={25} color="red" />,
  },
  {
    amount: "2500",
    trackingNO: "1122334455ASD",
    OrderDate: "10/12/12",
    Status: "REJECTED",
    Action: <BiTrash size={25} color="red" />,
  },
  {
    amount: "2500",
    trackingNO: "1122334455ASD",
    OrderDate: "10/12/12",
    Status: "PROCESSING",
    Action: <BiTrash size={25} color="red" />,
  },
];
