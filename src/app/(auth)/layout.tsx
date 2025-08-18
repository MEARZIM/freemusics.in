import React from 'react'


const layout = async ({
    children
}: {
    children: React.ReactNode
}) => {


    //  All Async operations can be performed here, such as fetching data or initializing services.
    
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
                {children}
            </div>
        </>
    )
}

export default layout
