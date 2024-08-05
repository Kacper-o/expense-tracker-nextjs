"use client";

import { useRef } from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";


const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const clientAction = async (formData: FormData) => {
        console.log("formData",formData);
        const {data, error} = await addTransaction(formData);

        if(error) {
            toast.error(error);
        } else {
            toast.success('Transaction added');
            formRef.current?.reset();
        }
    }

    return ( 
        <>
            <h3>Add transaction</h3>
            <form ref={formRef} action={clientAction}>
            <div className="form-control">
                    <label htmlFor="text">Category</label>
                    <select className="select" name="category" id="category">
                        <option value="food">Food</option>
                        <option value="expense">Bills</option>
                        <option value="investment">Investment</option>
                        <option value="investment">Entertainment</option>
                        <option value="transport">Transport</option>
                        <option value="clothes">Clothes</option>
                        <option value="health">Health</option>
                        <option value="travel">Travel</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" id="text" name="text" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount {/* <br /> */} (negative - expense, positive - income)</label>
                    <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01"/>
                </div>
                <button className="btn">
                    Addtransaction
                </button>
               
            </form>
        </>
     );
}
 
export default AddTransaction
