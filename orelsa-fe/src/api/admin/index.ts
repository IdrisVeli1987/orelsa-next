import { IProduct } from "@/interface/ui";
import axios from "axios";
import { getServerSession } from "next-auth";
import toast from "react-hot-toast";

const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/homeNewCollection";
const BASE_URL_SUPPORT =
  process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/";
const ADMIN_BE_URL = "http://localhost:9089/admin";
// API

export const postAdminDashboardHomeNewCollection = async () => {
  console.log(BASE_URL);
  const { data } = await axios.post(BASE_URL + "homeNewCollection/");
  return data;
};
export const updateProduct = async (editingProduct: any) => {
  let _link = ADMIN_BE_URL + "/dashboard/product/" + editingProduct._id;
  console.log("_link", _link);
  const token = localStorage.getItem("token");
  console.log("---", editingProduct);
  const { data } = await axios.patch(_link, editingProduct, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getAdminDashboardHomeNewCollection = async (id: string) => {
  const session = await getServerSession();
  const { data } = await axios.get(BASE_URL + "homeNewCollection/" + id, {
    headers: {
      Authorization: "Bearer " + session?.user?.email,
    },
  });
  console.log(data);
  return data;
};

export const patchAdminDashboardHomeNewCollectionById = async (
  id: string,
  title: string,
  photo: string
) => {
  await axios
    .patch(BASE_URL + "homeNewCollection/" + id, title, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + photo,
      },
    })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        toast.success("ss"); //??????????????????????????
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response?.data?.message || "error");
    });
};

export const getAdminDashboardHomeNewCollectionById = async (id: string) => {
  const { data } = await axios.get(BASE_URL + "homeNewCollection/" + id);
  return data;
};

export const postAdminDashboardHomeBrowseRange = async (
  description: string,
  photo: string
) => {
  // if(){}
};

export const getAllProductsAdmin = async () => {
  const url = "http://localhost:9089/admin/dashboard/product";

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const deleteProduct = async (productId: string) => {
  const token = localStorage.getItem("token");
  const url = "http://localhost:9089/admin/dashboard/product";
  console.log(token);

  try {
    const response = await axios.delete(`${url}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error; // Make sure to throw the error so it can be caught by the calling function
  }
};

export const getHomeNewCollection = async () => {
  const url = "http://localhost:9089/guest/homeNewCollection";

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};
