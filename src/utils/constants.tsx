import { TiHome } from "react-icons/ti";
import {
  FaUsers,
  FaHeart,
  FaBox,
  FaChartArea,
  FaDiceD6,
  FaCog,
} from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { NavItem } from "@/types";

export const links: NavItem[] = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },

  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },

  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },

  {
    icon: <FaChartArea />,
    name: "Grafikler",
    url: "/charts",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
    url: "/favorites",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
    url: "/inventory",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
    url: "/settings",
  },
];

export const inputs = [
  {
    label: "Ürün Adı",
    name: "name",
    type: "text",
  },
  {
    label: "Marka",
    name: "brand",
    type: "text",
  },
  {
    label: "Fiyat (₺)",
    name: "price",
    type: "number",
    step: 0.01,
    min: 0,
    max: 1000000,
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
    step: 1,
    min: 0,
    max: 1000000,
  },
  {
    label: "Rayting (0-5)",
    name: "rating",
    type: "number",
    defaultValue: 0,
    step: 0.1,
    min: 0,
    max: 5,
  },
  {
    label: "Yorum Sayısı",
    name: "reviews_count",
    type: "number",
    defaultValue: 0,
    step: 1,
    min: 0,
    max: 1000000,
  },
];

export const categories = [
  { label: "Select Category", value: "" },
  { label: "Electronics", value: "Electronics" },
  { label: "Clothing", value: "Clothing" },
  { label: "Shoes", value: "Shoes" },
  { label: "Accessories", value: "Accessories" },
  { label: "Home", value: "Home" },
  { label: "Kitap", value: "Books" },
];
