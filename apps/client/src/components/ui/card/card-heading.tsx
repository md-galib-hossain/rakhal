import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface CardHeadingProps{
    children:ReactNode,
    className?:string
}
const CardHeading = ({children,className}:CardHeadingProps) => {
  return (
    <p className={cn("text-xl font-semibold text-primary-foreground",className)}>{children}</p>
  )
}

export default CardHeading