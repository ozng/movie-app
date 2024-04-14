import { cn } from "@/utils/twMerge";
import { VariantProps, cva } from "class-variance-authority";

const skeletonVariants = cva(
  "animate-pulse rounded-md bg-slate-100 dark:bg-slate-800",
  {
    variants: {
      variant: {
        default: "w-full h-12",
        card: "w-48 h-64",
        title: "w-72 h-12",
        paragraph: "w-full h-4",
        icon: "w-16 h-12",
        button: "w-36 h-10",
        smText: "w-16 h-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div className={cn(skeletonVariants({ variant, className }))} {...props} />
  );
}

export { Skeleton };
