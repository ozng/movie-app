import { cn } from "@/utils/twMerge";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const typeVariants = cva(
  "inline-block text-light-paragraph dark:text-dark-paragraph",
  {
    variants: {
      variant: {
        default: "",
        accent: "text-accent",
        error: "text-red-500 text-sm font-semibold",
        overview: "text-sm text-justify",
        xl: "text-xl font-semibold",
        xs: "text-xs",
        link: "hover:underline hover:text-accent duration-150",
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
        light: "font-light",
      },
      textColor: {
        light: "text-dark-title dark:text-light-title",
        accent: "text-accent",
        "fade-1": "text-faded-1",
        "fade-2": "text-faded-2",
        "fade-3": "text-faded-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      thickness: "default",
    },
  }
);

export interface TypeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typeVariants> {
  asChild?: boolean;
}

const Type = React.forwardRef<HTMLParagraphElement, TypeProps>(
  (
    {
      className,
      variant,
      size,
      thickness,
      textColor,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(
          typeVariants({ variant, thickness, textColor, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Type.displayName = "Type";

export { Type, typeVariants };
