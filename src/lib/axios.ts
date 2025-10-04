"use server"

import axios from 'axios';
import { cookies } from "next/headers";

export const getServerAxios = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `token=${token}`
    },
  });

  return instance;
};


export default getServerAxios;