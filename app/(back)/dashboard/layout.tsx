import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2>I am Back Only Pages Layout</h2>
      {children}
    </div>
  )
}

