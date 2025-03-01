"use client"
import AuthForm from '@/components/AuthForm'
import { signUpScheme } from '@/lib/validations'
import React from 'react'

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpScheme}
      defaultValues={{ fullName: "", email: "", password: "", universityId: 0, universityCard: "" }}
      onSubmit={() => { }}
    />
  )
}

export default page
