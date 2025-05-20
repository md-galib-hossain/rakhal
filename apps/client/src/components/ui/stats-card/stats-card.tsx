import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Base Card Props
interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Props for sub-components
interface StatsCardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

interface StatsCardContentProps {
  value: string | number;
  className?: string;
  valueClassName?: string;
}

interface StatsCardFooterProps {
  children: ReactNode;
  className?: string;
}

interface StatsCardActionsProps {
  children: ReactNode;
  className?: string;
}

// Base Card Component
const Card = ({ children, className, style }: CardProps) => {
  return (
    <div
      className={cn(
        "p-4 bg-white shadow-sm border border_brand_primary rounded-[0.4rem] flex flex-col gap-4",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

// Header Component
const Header = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: StatsCardHeaderProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <p
        className={cn(
          "text-base text-gray-400 text_brand_secondary",
          titleClassName
        )}
      >
        {title}
      </p>
      {subtitle && (
        <p
          className={cn(
            "text-sm text-gray-500 text_brand_secondary",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Content Component
const Content = ({ value, className, valueClassName }: StatsCardContentProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span
        className={cn("text-4xl font-bold text_brand_primary font-primary", valueClassName)}
      >
        {value}
      </span>
    </div>
  );
};

// Footer Component
const Footer = ({ children, className }: StatsCardFooterProps) => {
  return <div className={cn("mt-auto", className)}>{children}</div>;
};

// Actions Component (for buttons or other interactive elements)
const Actions = ({ children, className }: StatsCardActionsProps) => {
  return (
    <div className={cn("flex gap-2 justify-end", className)}>{children}</div>
  );
};

// Compound Component
const StatsCard = Object.assign(Card, {
  Header,
  Content,
  Footer,
  Actions,
});

export default StatsCard;