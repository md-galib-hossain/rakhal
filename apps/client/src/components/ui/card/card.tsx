import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = ({ children, className,style }: CardProps) => {
  return (
    <div className={cn("p-4 bg-white shadow-xs rounded-[0.4rem]", className)} style={style}>
      {children}
    </div>
  );
};

export default Card;
