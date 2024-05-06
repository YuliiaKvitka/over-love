import Enjoy from '@/components/enjoy/Enjoy';
import Footer from '@/components/footer/Footer';
import Graphic from '@/components/graphic/Graphic';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Prefooter from '@/components/prefooter/Prefooter';
import SpeedUp from '@/components/speedUp/SpeedUp';
import Team from '@/components/team/Team';
import WhyLoveIt from '@/components/whyLoveIt/WhyLoveIt';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyLoveIt />
      <Graphic />
      <SpeedUp />
      <Enjoy />
      <Team />
      <Prefooter/>
      <Footer />
    </div>
  );
}
