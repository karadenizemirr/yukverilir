import HeaderComponent from '@/components/header/header.component'
import ServicesComponent from '@/components/services/services.component'
import TabComponent from '@/components/tab/tab.component'
import { Metadata } from 'next';
import 'animate.css';



export const metadata:Metadata = {
  title: 'Anasayfa',
  description: 'yükverilir anasayfa',
  keywords: 'yükverilir, yükver'
}

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <TabComponent />
      <ServicesComponent />
    </div>
  )
}
