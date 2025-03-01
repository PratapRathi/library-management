"use client"
import AuthForm from "@/components/AuthForm";
import { signInScheme } from "@/lib/validations";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInScheme}
      defaultValues={{ email: "", password: "" }}
      onSubmit={() => {}}
    />
  );
};

export default page;
