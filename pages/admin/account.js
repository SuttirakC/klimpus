import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import CardTable from "components/Cards/CardTable.js";
import CardStats from "components/Cards/CardStats.js";
import Admin from "layouts/Admin.js";

export default function Account() {
  const router = useRouter();
  const [userCount, setUserCount] = useState(null);
  const [role, setRole] = useState(1);
  const { data: session } = useSession()

  async function getUserCount() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/userList`, postData
    );

    const response = await res.json();
    setUserCount(response.response);
  }

  useEffect(() => {
    getUserCount();
  }, []);

  useEffect(() => {
    if (session) {
      setRole(session.user.role_id);
    }
    if (session && role !== 1) {
      router.push("/");
    }
  }, [session, role, router]);

  const updateUserCount = () => {
    getUserCount();
  };

  return (
    <>
      <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <a
          className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
        >
          Account Control
        </a>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
          <CardStats
            bgcolor="bg-gradient-to-b from-white from-90% to-kmutt_gray-100 to-10%"
            statSubtitle="Total Account"
            statTitleColor="text-kmutt_orange-100"
            statTitle={userCount ? userCount.totalAccount : "Loading..."}
            statIconName="fas fa-users"
            statIconColor="bg-gray-300"
          />
        </div>

        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
          <CardStats
            bgcolor="bg-gradient-to-b from-white from-90% to-kmutt_gray-200 to-10%"
            statSubtitle="Admin Role"
            statTitleColor="text-kmutt_orange-100"
            statTitle={userCount ? userCount.adminRole : "Loading..."}
            statIconName="fas fa-user-lock"
            statIconColor="bg-gray-300"
          />
        </div>

        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
          <CardStats
            bgcolor="bg-gradient-to-b from-white from-90% to-black to-10%"
            statSubtitle="Technical Role"
            statTitleColor="text-kmutt_orange-100"
            statTitle={userCount ? userCount.technicalRole : "Loading..."}
            statIconName="fas fa-user-gear"
            statIconColor="bg-gray-300"
          />
        </div>

        <div className="w-full mt-10 px-4">
          <CardTable updateUserCount={updateUserCount} />
        </div>
      </div>
    </>
  );
}

Account.layout = Admin;
