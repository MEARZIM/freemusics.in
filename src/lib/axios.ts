"use server"
import axios from 'axios';
import { cookies } from "next/headers";

const cookieStore = await cookies();
const token = cookieStore.get("token")?.value;


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    'Content-Type': 'application/json',
    'Cookie': `token=${token}`
  },
  withCredentials: true,
});


export default instance;