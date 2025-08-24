import React, { useState } from 'react'
export function Tabs({ defaultValue, children, className='' }){
  const [value,setValue] = useState(defaultValue)
  const ctx = { value, setValue }
  return <div className={className}>{React.Children.map(children, child => React.cloneElement(child, { ctx }))}</div>
}
export function TabsList({ children, className='', ctx }){
  return <div className={`flex gap-2 ${className}`}>{React.Children.map(children, child => React.cloneElement(child, { ctx }))}</div>
}
export function TabsTrigger({ value, children, className='', ctx }){
  const active = ctx?.value===value
  return <button onClick={()=>ctx.setValue(value)} className={`rounded-xl border px-3 py-1 text-sm ${active?'bg-indigo-600 text-white border-indigo-600':'border-neutral-300 dark:border-neutral-700'}`}>{children}</button>
}
export function TabsContent({ value, children, className='', ctx }){
  if(ctx?.value!==value) return null
  return <div className={className}>{children}</div>
}
