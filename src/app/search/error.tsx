"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    const router = useRouter();

    useEffect(() => {
        console.log("Error: ", error);
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center pt-10">
            <div
                className="
                    w-1/3
                    flex flex-col
                    justify-center items-center
                    border border-red-500
                "
            >

                <h1 className="text-3xl mb-4">Something went wrong.</h1>
                <p className="text-lg">{error.message}</p>
                <div className="my-5">

                    <button
                        onClick={() => router.push("/")}
                        className="
                            px-6 py-1
                            font-medium
                            rounded-md
                            outline outline-offset-2 outline-2
                            hover:brightness-105
                            hover:shadow-md
                            transition-all
                        " 
                    >
                        Home
                    </button>

                    <button
                        onClick={() => reset()}
                        className="
                            bg-blue-500
                            text-white
                            px-6 py-2 ml-2
                            font-medium
                            rounded-md
                            hover:brightness-105
                            hover:shadow-md
                            transition-all
                        " 
                    >
                        Try again
                    </button>

                </div>
            </div>
        </div>
    );
}