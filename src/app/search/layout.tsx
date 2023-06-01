
import { Inter } from 'next/font/google'
import ClientOnly from '@/components/ClientOnly';
import SearchHeader from '@/components/SearchHeader';

const inter = Inter({ subsets: ['latin'] })


export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div>

            {/* Search Header */}
            <SearchHeader />

            {children}

        </div>
            
    )
}
