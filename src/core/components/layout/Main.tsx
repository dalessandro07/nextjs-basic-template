interface IPageProps {
  children?: React.ReactNode
  className?: string
}

export default function Main ({ children, className }: IPageProps) {
  return (
    <main className={`flex flex-col grow gap-5 ${className}`}>
      {children}
    </main>
  )
}
