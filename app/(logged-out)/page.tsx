import { Button } from "@/components/ui/button"
import { PersonStanding } from "lucide-react"
import Link from "next/link";


export default function LandingPage() {


  return (
    <>
      <h2 className="flex items-center gap-2"><PersonStanding size={45} className="text-pink-500" />Welcome</h2>

      <p>The best dashboard to manage customer support</p>

      <div className="flex gap-2 items-center my-2">
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}