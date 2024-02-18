import React from 'react'
import ACL from './ACL'

function Button ({ children, ...otherProps }) {
  return <button {...otherProps}>{children}</button>
}

const MyACL = ACL(Button)

export default MyACL
