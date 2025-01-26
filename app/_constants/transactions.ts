import {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  Food: "Alimentação",
  Health: "Saúde",
  Housing: "Moradia",
  Utility: "Utilidades",
  Salary: "Salário",
  Transportation: "Transporte",
  Entertainment: "Entretenimento",
  Education: "Educação",
  Other: "Outros",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  Pix: "Pix",
  Cash: "Dinheiro",
  Debit: "Cartão de Débito",
  Credit: "Cartão de Crédito",
  Transfer: "Transferência Bancária",
  Other: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.Deposit,
    label: "Depósito",
  },
  {
    value: TransactionType.Expense,
    label: "Despesa",
  },
  {
    value: TransactionType.Investment,
    label: "Investimento",
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.Education,
    label: TRANSACTION_CATEGORY_LABELS.Education,
  },
  {
    value: TransactionCategory.Entertainment,
    label: TRANSACTION_CATEGORY_LABELS.Entertainment,
  },
  {
    value: TransactionCategory.Food,
    label: TRANSACTION_CATEGORY_LABELS.Food,
  },
  {
    value: TransactionCategory.Health,
    label: TRANSACTION_CATEGORY_LABELS.Health,
  },
  {
    value: TransactionCategory.Housing,
    label: TRANSACTION_CATEGORY_LABELS.Housing,
  },
  {
    value: TransactionCategory.Other,
    label: TRANSACTION_CATEGORY_LABELS.Other,
  },
  {
    value: TransactionCategory.Salary,
    label: TRANSACTION_CATEGORY_LABELS.Salary,
  },
  {
    value: TransactionCategory.Transportation,
    label: TRANSACTION_CATEGORY_LABELS.Transportation,
  },
  {
    value: TransactionCategory.Utility,
    label: TRANSACTION_CATEGORY_LABELS.Utility,
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.Cash,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.Cash,
  },
  {
    value: TransactionPaymentMethod.Pix,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.Pix,
  },
  {
    value: TransactionPaymentMethod.Debit,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.Debit,
  },
  {
    value: TransactionPaymentMethod.Credit,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.Credit,
  },
  {
    value: TransactionPaymentMethod.Transfer,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.Transfer,
  },
  {
    value: TransactionPaymentMethod.Other,
    label: TRANSACTION_PAYMENT_METHOD_LABELS.Other,
  },
];
