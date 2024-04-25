"use client";

import { loginUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState();
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const found = await loginUser(formData);

      if (found) {
        console.log("user found ");
        router.push("/");
      } else {
        setError("Please provide a valid login credentials!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {error}

      <form className="login-form" onSubmit={onSubmit}>
        {/* email */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* password */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
}
