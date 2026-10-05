

"use client";
import { authClient } from '@/lib/auth-client';

import Link from 'next/link';
import React from 'react';

const UserInfo =  () => {

    const { data: session, error } = authClient.useSession()
    const user = session?.user
    console.log(user)


    const logout = async () => {
        await authClient.signOut()
    }
   


    return (
        <div>
            {
                user ? <div>
                    
                    {/* <div className="avatar avatar-online">
  <div className="w-24 rounded-full">
    <Image alt="Tailwind-CSS-Avatar-component" src={user.image} width={24} height={24} />
  </div> */}
{/* </div> */}
                    
                Welcome {user.name}

                <Link href="/">
              <button
                type="button"
                onClick={logout}
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-red-700 sm:px-4"
              >
                লগআউট
              </button>
            </Link>
                    
                    
                    
                    </div> :
                 <div>
                     <Link href="/sign-in">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-red-700 sm:px-4"
              >
                সাইন ইন
              </button>
            </Link>

          <Link href="/sign-up">
            <button
              type="button"
              className="bg-red-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800 sm:px-4"
            >
              সাইন আপ
            </button>
          </Link>

                </div>
            }
           
             
            
        </div>
    );
};

export default UserInfo;