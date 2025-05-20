import React, { ReactNode } from 'react'

const GlassCard = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-white/45 backdrop-blur-sm border border-white/20 p-1 rounded-[0.65rem]'>
{children}
    </div>
  )
}

export default GlassCard