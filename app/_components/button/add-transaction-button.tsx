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
        className="rounded-lg bg-gray-100 text-purple-800 font-sans hover:bg-white"
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
