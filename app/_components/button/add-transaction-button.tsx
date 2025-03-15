"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import FormTransaction from "../form-transaction";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-lg bg-[#081e9d] text-white font-sans hover:bg-[#081e9df2]"
        onClick={() => setFormIsOpen(true)}
      >
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>
      <FormTransaction isOpen={formIsOpen} setIsOpen={setFormIsOpen} />
    </>
  );
};

export default AddTransactionButton;
