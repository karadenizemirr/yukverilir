import HeaderComponent from '@/components/header/header.component'
import ServicesComponent from '@/components/services/services.component'
import TabComponent from '@/components/tab/tab.component'
import 'animate.css';

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <TabComponent />
      <ServicesComponent />
    </div>
  )
}
