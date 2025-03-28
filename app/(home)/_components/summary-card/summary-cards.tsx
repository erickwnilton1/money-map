import { db } from "@/app/_lib/prisma";
import SummaryCard from "./summary-card";

import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";

const SummaryCards = async () => {
  const { userId } = await auth();

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "Deposit", userId: userId || undefined },
        _sum: { amount: true },
      })
    )?._sum?.amount || 0
  );
  const investimentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "Investment", userId: userId || undefined },
        _sum: { amount: true },
      })
    )?._sum?.amount || 0
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "Expense", userId: userId || undefined },
        _sum: { amount: true },
      })
    )?._sum?.amount || 0
  );

  const balance = depositsTotal - investimentsTotal - expensesTotal;

  return (
    <div className="mt-6 mx-2 space-y-6 lg:mx-8">
      <SummaryCard
        icon={<WalletIcon size={16} className="text-[#081e9d]" />}
        title="Saldo"
        amount={depositsTotal}
        size="large"
      />

      <div className="grid grid-cols-3 gap-2 lg:gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} className="text-[#081e9d]" />}
          title="Investido"
          amount={investimentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-[#081e9d]" />}
          title="Receita"
          amount={balance}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-[#081e9d]" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
