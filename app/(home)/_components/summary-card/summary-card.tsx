import AddTransactionButton from "@/app/_components/button/add-transaction-button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-col items-start lg:gap-4 lg:flex-row lg:items-center">
        {icon}
        <p className="text-muted-foreground text-[#081e9d]">{title}</p>
      </CardHeader>
      <CardContent className="flex h-auto w-auto justify-between">
        <p>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
