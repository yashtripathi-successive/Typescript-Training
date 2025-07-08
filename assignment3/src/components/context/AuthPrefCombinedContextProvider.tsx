import React from 'react'
import AuthContextProvider from './AuthContext'
import PreferenceContextProvider from './PreferenceContext'

const AuthPrefCombinedContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
           <PreferenceContextProvider>
            {children}
           </PreferenceContextProvider>
        </AuthContextProvider>
  )
}

export default AuthPrefCombinedContextProvider
