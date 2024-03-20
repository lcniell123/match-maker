"use client";
import Link from "next/link";
import { Container } from '@/app/components/Container';
import Image from 'next/image';
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export const Navigation = () => {
    const router = useRouter();

    return (
        <div className="sticky top-0 backdrop-blur-xl z-50">
            <Container className="flex justify-between items-center py-2">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                <button
                    onClick={async () => {
                        await signOut();
                        router.push("/");
                    }}
                    className="text-black text-sm bg-transparent hover:bg-blue-100 hover:text-blue-700 font-bold py-1 px-2 rounded border border-black"
                >
                    Sign out
                </button>
            </Container>
        </div>
    );
}
