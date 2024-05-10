import { React, useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// components

// layout for page

import Admin from "layouts/Admin.js";
import CardUpdate from "components/Cards/CardUpdate";
import CardResetPass from "components/Cards/CardResetPass";

export default function UpdateAccount() {
    const router = useRouter();
    const { id } = router.query; // Extract the id from query parameters
    const [role, setRole] = useState(1);
    const { data: session, status } = useSession()

    useEffect(() => {
        // Redirect if user role is not admin
        if (session) {
            setRole(session.user.role_id);
        }
        if (session && role !== 1) {
            router.push("/");
        }
    }, [session, role]);

    return (
        <>
            <div className="w-full mx-auto items-start flex justify-start md:flex-nowrap flex-wrap md:px-10 px-4">
                <Link href="/admin/account">
                    <span
                        className={"fas fa-arrow-left  text-2xl text-white"}
                    >
                    </span>
                </Link>
                <div
                    className="text-white text-2xl uppercase hidden text-left ml-3 lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Update Account
                </div>
            </div>
            <div className="flex flex-wrap">

                <div className="w-full mt-8 px-4 mb-2">
                    <CardUpdate userId={id} />
                    <CardResetPass userId={id} />
                </div>
            </div>
        </>
    );
}

UpdateAccount.layout = Admin;