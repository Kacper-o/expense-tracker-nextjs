export interface Transaction {
    id: string;
    text: string;
    amount: number;
    userId: string;
    createdAt: Date;
    category: string;
}

export interface TransactionData {
    text: string;
    amount: number;
    category: string;
}

export interface TransactionResult {
    data?: TransactionData;
    error?: string;
}
