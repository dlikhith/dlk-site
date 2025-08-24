import React from 'react'
export function Card({ className='', children }){
  return <div className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
}
export function CardHeader({ children, className='' }){
  return <div className={`p-4 border-b border-neutral-200 dark:border-neutral-800 ${className}`}>{children}</div>
}
export function CardTitle({ children, className='' }){
  return <h3 className={`text-base font-semibold ${className}`}>{children}</h3>
}
export function CardContent({ children, className='' }){
  return <div className={`p-4 ${className}`}>{children}</div>
}
