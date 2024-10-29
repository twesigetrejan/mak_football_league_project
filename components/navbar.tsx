import Image from "next/image";
import Link from "next/link";

const NavLinks: {
    id: number;
    ref: string;
    linkname: string;
}[] = [
        {
            id: 1,
            ref: "/",
            linkname: "Standings"
        },
        {
            id: 2,
            ref: "/", 
            linkname: "Teams"
        },
        {
            id: 3,
            ref: "/",
            linkname: "Players"
        },
        {
            id: 4,
            ref: "/",
            linkname: "Fields"
        },
        {
            id: 5,
            ref: "/",
            linkname: "Referees"
        },
    ];

export default function Navbar() {
    return (
        <div className="bg-green-600 flex justify-between items-center p-2">
            <div className="flex justify-center items-center">
                <Image src="/mak.jpeg" alt="mak logo" width={50} height={50} className="rounded-full" />
                <div className="">
                    <p className=" text-white shadow-sm px-1 font-semibold ">Mak Football League</p>
                </div>
            </div>

            <div className="flex space-x-10 mx-20 font-medium -mr-56">
                {NavLinks.map((navlink) => (
                    <Link href={navlink.ref} key={navlink.id} className="text-white hover:scale-105">
                        {navlink.linkname}
                    </Link>
                ))}

            </div>
            <div className="">
                <Image src="/user.png" alt="mak logo" width={30} height={30} className="rounded-full" />
            </div>

        </div>
    );
}
