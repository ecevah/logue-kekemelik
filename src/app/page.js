import Hero from "@/components/home/hero";
import NasilCalisir from "@/components/home/nasilCalisir";
import BasEtmeyiOgren from "@/components/home/basEtmeyiOgren";
import NedenLogue from "@/components/home/nedenLogue";
import RandevuBox from "@/components/home/randevuBox";
import MusteriYorumlari from "@/components/home/musteriYorumlari";
import Blog from "@/components/home/blog";

export const metadata = {
  title: 'Anasayfa',
  description: 'asdds',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[100vw] overflow-hidden">
      {/* <img className="absolute left-0 top-[0%]" src="/assets/images/hero/bg-left.jpg" /> */}
      {/* <img className="absolute right-0 top-[25%]" src="/assets/images/hero/ce.png" /> */}
      <Hero />
      <NasilCalisir />
      <RandevuBox />
      <BasEtmeyiOgren />
      <NedenLogue />
      <MusteriYorumlari />
      <Blog/>
    </main>
  )
}