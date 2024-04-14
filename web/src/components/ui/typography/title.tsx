import { cn } from "@/utils/twMerge";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const titleVariants = cva("", {
  variants: {
    variant: {
      default: "text-light-title dark:text-dark-title",
      light: "text-dark-title dark:text-light-title",
      "fade-1": "text-faded-1",
      "fade-2": "text-faded-2",
      "fade-3": "text-faded-3",
      accent: "text-accent",
    },
    size: {
      default: "",
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    thickness: {
      default: "",
      md: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    thickness: "default",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      className,
      variant,
      size,
      thickness,
      element = "h2",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : element;
    return (
      <Comp
        className={cn(titleVariants({ variant, thickness, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Title.displayName = "Title";

export { Title, titleVariants };
