import axios from "axios";
import { getServerSession } from "next-auth";
import toast from "react-hot-toast";

const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/homeNewCollection";
const BASE_URL_SUPPORT =
  process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/dashboard/";

// API

export const postAdminDashboardHomeNewCollection = async () => {
  console.log(BASE_URL);
  const { data } = await axios.post(BASE_URL + "homeNewCollection/");
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
