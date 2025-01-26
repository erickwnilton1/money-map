"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteTransactionSchema } from "../schema-transactions/schema-delete";
import { revalidatePath } from "next/cache";

const DeleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  await db.transaction.delete({ where: { id: transactionId } });

  revalidatePath("/");
};

export default DeleteTransaction;
