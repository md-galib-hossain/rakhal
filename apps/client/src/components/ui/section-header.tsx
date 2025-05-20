import React, { ReactNode } from 'react'

const PageHeader = ({children}:{children:ReactNode}) => {
  return (
    <h2 className='text-3xl text-brand-primary font-bold'>{children}</h2>
  )
}

export default PageHeader