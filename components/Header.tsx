import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
import { X } from 'lucide-react';
import Link from 'next/link';

const Header = async () => {
    const user = await checkUser();
    
    return ( 
        <nav className="navbar">
            <div className="navbar-container">
                <h2><X />pense</h2>
                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;