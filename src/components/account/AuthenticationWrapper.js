import React from 'react'
import ContextConsumer from '../../layouts/context'

const AuthenticationWrapper = ({ children }) => {
  return (
    <ContextConsumer>
      {({ store }) => {
        const isAuthenticated =
          store.customerAccessToken &&
          store.customerAccessToken.expiresAt &&
          store.customerAccessToken.expiresAt > new Date().toISOString()
            ? true
            : false
        return children({
          isAuthenticated,
        })
      }}
    </ContextConsumer>
  )
}

export default AuthenticationWrapper
