import { Order, Product, User } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// kullanıcıları getir
const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};

// kullanıcı getir
const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${id}`);
  return res.json();
};

// kullanıcı sil
const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

// bütün siparişleri getir
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${API_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);

  return res.json();
};

// bir ürünü getir
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`);

  return res.json();
};

// ürünü sil
const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

// ürün oluştur
const createProduct = async (product: Omit<Product, "id">) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// ürün güncelle
const updateProduct = async (id: string, product: Omit<Product, "id">) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

export {
  getOrders,
  getProducts,
  deleteProduct,
  getProduct,
  createProduct,
  updateProduct,
  getUsers,
  getUser,
  deleteUser,
};
