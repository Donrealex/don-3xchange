import {
  FaBitcoin,
  FaPaypal,
  FaDollarSign,
  FaEnvelopeOpenText,
  FaUniversity,
} from "react-icons/fa";
import { SiZelle } from "react-icons/si";

export const ServiceData = [
  {
    id: 1,
    title: "Crypto Assets",
    icon: FaBitcoin,
    color: "text-orange-500",
    desc: "Buy and sell Bitcoin, Ethereum, USDT, and other major cryptocurrencies instantly.",
  },
  {
    id: 2,
    title: "PayPal",
    icon: FaPaypal,
    color: "text-blue-500",
    desc: "Fast and secure PayPal exchanges. We process funds directly from your balance.",
  },
  {
    id: 3,
    title: "CashApp",
    icon: FaDollarSign,
    color: "text-green-500",
    desc: "Instant mobile transfers. Scan our tag or send directly for quick processing.",
  },
  {
    id: 4,
    title: "Zelle",
    icon: SiZelle,
    color: "text-purple-500",
    desc: "Bank-to-bank transfers with zero fees and instant confirmation times.",
  },
  {
    id: 5,
    title: "Cash Mailing",
    icon: FaEnvelopeOpenText,
    color: "text-white",
    desc: "Physical cash logistics for high-privacy transactions via secure mail.",
  },
  {
    id: 6,
    title: "Wire Transfer",
    icon: FaUniversity,
    color: "text-gray-400",
    desc: "Handling high-volume domestic and international bank wires securely.",
  },
];
