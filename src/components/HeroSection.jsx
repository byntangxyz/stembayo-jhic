import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16">
      {/* Background bulat besar */}
      <div className="absolute -left-60 -top-24 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-primary to-[#4F6E89] -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-8">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selamat Datang di <br /> SMK Negeri 2 Depok Sleman
          </h1>
          <p className="text-white font-sans mb-6">
            Mencetak lulusan unggul, berakhlak mulia, dan siap bekerja di era
            global.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/profile"
              className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary/90 transition"
            >
              Profile
            </Link>
            <Link
              href="/informasi"
              className="bg-white border border-primary text-primary px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Informasi
            </Link>
          </div>
        </div>

        {/* Grid foto */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/assets/hero-1.png"
            alt="Kegiatan 1"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
          <Image
            src="/assets/hero-2.png"
            alt="Kegiatan 2"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
          <Image
            src="/assets/hero-3.png"
            alt="Kegiatan 3"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
          <Image
            src="/assets/hero-4.png"
            alt="Kegiatan 4"
            width={300}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
