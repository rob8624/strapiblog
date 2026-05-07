



export function Container({ children } : {children:React.ReactNode }) {
  return (
   <div className="flex-1 max-w-4xl px-1 flex flex-col min-h-dvh ">
      {children}
    </div>
  )
}