import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 active:scale-[0.99]",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-[0.99]",
        outline:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        ghost:
          "hover:bg-gray-100 text-gray-900",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, _asChild = false, ...props }) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

// oxlint-disable-next-line react/only-export-components
export { Button, buttonVariants }
