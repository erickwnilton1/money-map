import Navbar from "./_components/navbar";
import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { transactionsColumns } from "./_columns";
import SummaryCards from "./_components/summary-card/summary-cards";
import UserWelcome from "./_components/user-welcome";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <section className="home-page">
      <Navbar />
      <div className="mx-8 mt-6">
        <div className="text-3xl font-sans tracking-tight">Transações</div>
      </div>
      <div>
        <SummaryCards />
      </div>
      <div className="mt-10 mx-2 lg:mx-8">
        {transactions.length === 0 ? (
          <div className="m-auto items-center justify-center">
            <div className="flex m-auto items-center justify-center min-w-[200px] max-w-[500px]">
              <UserWelcome />
            </div>
          </div>
        ) : (
          <DataTable columns={transactionsColumns} data={transactions} />
        )}
      </div>
    </section>
  );
};

export default Home;
