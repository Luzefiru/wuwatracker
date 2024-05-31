import { ConveneStats } from '@/components/convenes/convene-stats';
import Header from '@/components/home/header';
import { Sidebar } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-between">
      <Header />
      <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-24">
        <Sidebar />
        <ConveneStats />
      </div>
    </div>
  );
}
