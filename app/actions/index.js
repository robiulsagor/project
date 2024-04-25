"use server";

import { createUser, performLogin } from "@/db/queries";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  const create = createUser(user);
  redirect("/login");
};

export const loginUser = async (formData) => {
  try {
    const credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");
    const user = await performLogin(credentials);
    console.log(user);

    return user;
  } catch (error) {
    throw error;
  }
};
