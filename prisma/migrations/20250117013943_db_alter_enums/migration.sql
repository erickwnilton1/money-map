-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('Deposit', 'Expense', 'Investment');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('Food', 'Health', 'Housing', 'Utility', 'Salary', 'Trasportation', 'Entertainment', 'Education', 'Other');

-- CreateEnum
CREATE TYPE "TransactionPaymentMethod" AS ENUM ('Credit', 'Debit', 'Transfer', 'Cash', 'Pix', 'Other');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "category" "TransactionCategory" NOT NULL,
    "paymentMethod" "TransactionPaymentMethod" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
