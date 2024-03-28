export const selectorTransactions = state => state.transactions.transactions;
export const selectError = state => state.transactions.error;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectTransactions = state => state.transaction.categoriesSummary;
export const selectExpenseSummary = state => state.transaction.expenseSummary;
export const selectIncomeSummary = state => state.transaction.incomeSummary;
