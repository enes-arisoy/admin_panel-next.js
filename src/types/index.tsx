type NavItem = {
  icon: React.ReactNode;
  name: string;
  url: string;
};

type Order = {
  id: string;
  order_id: number;
  user_id: number;
  order_date: string;
  status: string;
  total_price: number;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: {
    product_id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
};

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string | string[];
    backgroundColor: string | string[];
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
  }[];
};

type Product = {
  id: string,
  name: string,
  brand: string,
  price: number,
  stock: number,
  rating: number,
  reviews_count: number,
  category: string,
  image_url: string,
  description: string
}

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  phone: string;
  orders: {
    order_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    order_date: string;
  }[];
};

export type { NavItem, Order, ChartData, Product, User };
