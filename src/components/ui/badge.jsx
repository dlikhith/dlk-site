import React from 'react'
export function Badge({ children, className='', variant='secondary' }){
  const styles = variant==='secondary' ? 'bg-neutral-100 dark:bg-neutral-800 text-foreground' : 'bg-indigo-600 text-white'
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs ${styles} ${className}`}>{children}</span>
}
