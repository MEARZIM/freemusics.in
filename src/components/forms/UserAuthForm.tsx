'use client'

import * as React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Icons } from '../icons/icon'



interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm = ({
    className,
    ...props
}: UserAuthFormProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loginWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google');
        } catch (error) {

            toast('Error logging in with Google',
                {
                    icon: '❌',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button
                type='button'
                size='sm'
                className='w-full text-sm'
                onClick={loginWithGoogle}
                disabled={isLoading}>
                {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
                Google
            </Button>
        </div>
    )
}

export default UserAuthForm
