"use client"
import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/actions/auth'
import { signUpScheme } from '@/lib/validations'
import React from 'react'

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpScheme}
      defaultValues={{ fullName: "", email: "", password: "", universityId: 0, universityCard: "" }}
      onSubmit={signUp}
    />
  )
}

export default page
