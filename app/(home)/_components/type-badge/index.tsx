import { Badge } from "@/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.Deposit) {
    return (
      <Badge className="bg-[#081e9d] font-bold text-white hover:bg-[#081e9de8]">
        <CircleIcon className="mr-2 fill-white" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.Expense) {
    return (
      <Badge className="bg-red-500 bg-opacity-40 font-bold text-red-500 hover:bg-red-500 hover:bg-opacity-40">
        <CircleIcon className="mr-2 fill-red-500" size={10} />
        Despesa
      </Badge>
    );
  }
  if (transaction.type === TransactionType.Investment) {
    return (
      <Badge className="bg-sky-800 bg-opacity-40 font-bold text-sky-950 hover:bg-sky-800 hover:bg-opacity-40">
        <CircleIcon className="mr-2 fill-sky-950" size={10} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;
