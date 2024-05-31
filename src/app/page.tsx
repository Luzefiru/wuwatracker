import Header from '@/components/home/header';
import { Sidebar } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-between">
      <Header />
      <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-24">
        <Sidebar />
        {/* TODO - remove this home page or make it redirect to the first banner */}
        <h1>Click on a banner on the sidebar to get started!</h1>
      </div>
    </div>
  );
}
