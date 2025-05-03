"use client"
import * as React from "react"

type ToastProps = {
  id:string
  title: string
  description?: string
  variant?: "default" | "destructive"
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const toast = (props: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substring(2,9)
    setToasts((prev) => [...prev, { ...props, id, duration: 5000 }])
  }

  const dismiss = (id?: string) => {
    setToasts((prev) => 
      id ? prev.filter(t => t.id !== id) : []
    )
  }

  return { toasts, toast, dismiss }
}