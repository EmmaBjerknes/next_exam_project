import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/cnHelper";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        campaign: "border-transparent bg-[var(--badge-primary)]",
        outlet: "border-transparent bg-[var(--badge-secondary)]",
        cart: "border-transparent absolute top-0 right-0 -mt-1 -mr-1 flex h-2 w-2 items-center justify-center rounded-full bg-[#571987] p-2.5 text-sm text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
