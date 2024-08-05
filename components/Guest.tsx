import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Guest = () => {
    return ( 
        <div className="guest">
                <div>
                <h1 className="guest-heading">Save more</h1>
                </div>
                <div className="guest-right-section">
                    <Image src="/cat-money.png" alt="Cat money"
                    layout="responsive" width={500} height={400} />
                </div>
            <div className="guest-left-section">
                <p className="guest-paragraph">With Expense Tracker</p>
                <SignInButton />
                </div>
        </div>
     );
}
 
export default Guest;