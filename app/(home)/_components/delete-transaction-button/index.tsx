import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import DeleteTransaction from "@/app/_actions/delete-transaction";

interface DeleteTransactionProps {
  transactionId: string;
}

const DeleteTransactionButton = ({ transactionId }: DeleteTransactionProps) => {
  const handleConfirmDelete = async () => {
    try {
      await DeleteTransaction({ transactionId });
      toast.success("Transação deletada com sucesso.", {
        style: { background: "#109010", color: "#fff" },
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao deletar a transação.", {
        style: { background: "#ff0000", color: "#fff" },
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="ghost" size="icon">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você deseja realmente deletar essa transação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDelete}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTransactionButton;
