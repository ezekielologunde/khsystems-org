"use client"

import dynamic from "next/dynamic"

export const LazyToaster = dynamic(() => import("./sonner").then((m) => m.Toaster), {
  ssr: false,
})
