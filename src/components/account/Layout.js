import React from 'react'
import AuthenticationWrapper from './AuthenticationWrapper'
import { replace } from 'gatsby'

const AccountLayout = ({ children }) => {
  return (
    <AuthenticationWrapper>
      {({ isAuthenticated }) =>
        isAuthenticated
          ? children
          : typeof window !== 'undefined'
          ? replace(`/account/login`)
          : null
      }
    </AuthenticationWrapper>
  )
}

export default AccountLayout
