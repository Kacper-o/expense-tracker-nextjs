'use server';

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { type Transaction, TransactionByCategory } from "@/types/Transaction";

async function getTransactionsByCategory(): Promise<{
    transactionsByCategory?: TransactionByCategory[];
    error?: string
}> {
    const { userId } = auth();

    if (!userId) {
        return { error: 'User not found' };
    }

    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const transactionsByCategoryObj: Record<string, Transaction[]> = {};

        transactions.forEach(transaction => {
            const category = transaction.category || 'Uncategorized';
            if (!transactionsByCategoryObj[category]) {
                transactionsByCategoryObj[category] = [];
            }
            transactionsByCategoryObj[category].push(transaction);
        });

        const transactionsByCategory = Object.entries(transactionsByCategoryObj).map(([category, transactions]) => ({
            category,
            transactions
        }));

        return { transactionsByCategory };
    } catch(error) {
        return { error: 'Database error' }
    }
}

export default getTransactionsByCategory;