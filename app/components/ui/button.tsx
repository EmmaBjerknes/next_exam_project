import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/cnHelper";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "text-black hover:bg-destructive/60",
        addToCart:
          "border-input bg-black drop-shadow-md text-white hover:filter-none",
        carousel:
          "absolute h-8 w-8 rounded-full hover:bg-[var(--badge-secondary)]",
        cta: "border-input bg-[var(--badge-primary)] font-semibold drop-shadow-md hover:filter-none",
        navBack: "decoration-[var(--badge-secondary)] hover:underline",
        confirm: "bg-green-300 font-semibold",
        cancel: "bg-red-300 font-semibold",
        stepper: "bg-white text-black hover:bg-secondary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "p-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
