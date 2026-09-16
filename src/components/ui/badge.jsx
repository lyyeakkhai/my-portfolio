import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-emerald-600 text-white shadow-xs hover:bg-emerald-700",
        secondary:
          "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200",
        outline:
          "text-gray-900 border-gray-300",
        accent:
          "border-emerald-200 bg-emerald-50 text-emerald-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
