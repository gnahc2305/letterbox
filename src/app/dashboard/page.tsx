import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardNavbar from "@/components/dashboard-navbar";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <DashboardNavbar />
      Dashboard
      <h1>needs to log in</h1>
    </div>
  );
};

export default Dashboard;
