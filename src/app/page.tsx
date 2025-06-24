
// app/page.tsx

import GeneralSection from '@/features/home/components/GeneralSection';
import HeroSection from '@/features/home/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <GeneralSection/>
    </>
  );
}