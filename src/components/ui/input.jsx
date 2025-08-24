import React from 'react'
export function Input({ className='', ...props }){
  return <input className={`w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none` + ' ' + className} {...props} />
}
