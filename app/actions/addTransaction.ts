'use server';
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache"
import { type TransactionResult, TransactionData } from "@/types/Transaction";



async function addTransaction(formData: FormData): Promise<TransactionResult> {
    const textValue = formData.get('text');
    const amountValue = formData.get('amount');
    const categoryValue = formData.get('category');

    console.log("textValue", textValue);
    console.log("amountValue", amountValue);
    console.log("categoryValue", categoryValue);
    // Check for input values
    if(!textValue || textValue === '' || !amountValue) {
        return { error: 'Text or amount is missing' };
    }
    
    const text: string = textValue.toString() // Ensure text is string
    const amount: number = parseFloat(amountValue.toString()); // Parse amount as number
    const category: string = categoryValue.toString();
    // Get logged in user
    const  { userId } = auth();

    // Check for  user
    if(!userId) {
        return { error: 'User not found' };
    }

    try {
        const transactionData: TransactionData = await db.transaction.create({
            data: {
                text,
                amount,
                userId
            }
        })

        revalidatePath('/')

        return { data: transactionData}
    } catch(error) {
        return { error: 'Transaction not added' }
    }


}

export default addTransaction;