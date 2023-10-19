import type { Metadata } from 'next'
import './globals.css'
import 'sweetalert2/dist/sweetalert2.css';
import NavbarComponent from '@/components/navbar/navbar.component'
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/session/session.provider';
import StoreProvider from '@/components/provider/provider.component';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      
        <StoreProvider>
          <body className='bg-light'>
          <SessionProvider session={session} >
            <NavbarComponent />
            {children}
            </SessionProvider>
          </body>
        </StoreProvider>
      
    </html>
  )
}