import { Anton } from "next/font/google";
import { Poppins } from "next/font/google";
import { LampContainer, LampDemo } from "../ui/lamp";
import { Button } from "@/components/ui/button"


const anton = Anton({
  weight: ['400'],
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})


const Header = () => {
  return (
    // <header>
    //   <LampContainer>

    //   <h1 className={`${anton.className} bg-gradient-to-br from-cyan-300 to-slate-950 py-4 bg-clip-text w-[100vw] text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl`}>We solve problems through remarkable design</h1>
    //   </LampContainer>
    // </header>

    <div className={poppins.className}>
      <Button variant="outline">Button</Button>
    </div>
  )
}

export default Header

