import { SignInButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"


function Header() {
     const {userId} = auth()
     console.log(userId)
  return (
    <div className=" flex justify-between items-center px-8 border-b mb-5">
        <Link href="/">
            <Image src="https://links.papareact.com/xgu" alt="logo" width={200} height={100} className=" object-contain  cursor-pointer" />
        </Link>


        {userId ? (
            <div>
                <UserButton  />
            </div>
        ) : (
            <SignInButton mode="modal" forceRedirectUrl="/translate" />
        )}
    </div>
  )
}

export default Header