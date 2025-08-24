import React from 'react'
export function Button({ asChild, children, className='', variant='default', size='base', ...props }){
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    default: 'bg-indigo-600 text-white',
    outline: 'border border-neutral-300 dark:border-neutral-700 text-foreground',
    ghost: 'bg-transparent',
    secondary: 'bg-neutral-100 dark:bg-neutral-800 text-foreground',
  }
  const sizes = { lg:'px-5 py-3 text-base', base:'px-4 py-2 text-sm', icon:'p-2' }
  const cls = [base, variants[variant]||variants.default, sizes[size]||sizes.base, className].join(' ')
  const Comp = asChild ? 'a' : 'button'
  return <Comp className={cls} {...props}>{children}</Comp>
}
