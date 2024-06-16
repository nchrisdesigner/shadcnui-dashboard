import Toggle from "@/components/ui/toggle"

type Props = {
  children?: React.ReactNode
}

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center min-h-screen justify-center p-24">
        {children}
      </div>
      <Toggle className="fixed top-1/2 -mt-4 right-4" />
    </>

  )
}

export default LoggedOutLayout