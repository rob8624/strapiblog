



export function Container({ children } : {children:React.ReactNode }) {
  return (
   <div className="w-full max-w-4xl px-1 flex flex-col ">
      {children}
    </div>
  )
}