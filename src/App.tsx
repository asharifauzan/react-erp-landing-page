import Navbar from "./components/Navbar";
import BlobBlue from "./components/BlobBlue";
import BlobPurple from "./components/BlobPurple";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import { cn } from "./lib/utils";
import { motion } from "motion/react";
import erp from "./assets/erp.svg";

type PlansType = {
  name: "Basic" | "Business" | "Enterpreneur";
  description: string;
  price: number;
  benefits: string[];
  is_populer?: boolean;
};

function App() {
  const plans: PlansType[] = [
    {
      name: "Basic",
      description: "Untuk bisnis kecil yang baru anda mulai",
      price: 99,
      benefits: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
    },
    {
      name: "Business",
      description: "Untuk membantu bisnis anda yang sedang berkembang",
      price: 299,
      benefits: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
      is_populer: true,
    },
    {
      name: "Enterpreneur",
      description: "Untuk industri besar yang membutuhkan teknologi tinggi",
      price: 999,
      benefits: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* Section About */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="relative container px-4 md:px-6 mx-auto z-10">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <motion.h1
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    >
                      Kembangkan Bisnis Anda Dengan AbcERP
                    </motion.h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Solus tepat untuk menunjang digitalisasi bisnis anda
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg">
                      <a href="#price">Lihat penawaran</a>
                    </Button>
                  </div>
                </div>
                <img src={erp} />
              </div>
            </div>
          </div>

          {/* Blobs */}
          <BlobBlue className="absolute top-0 left-0 min-w-0.5 w-2xl" />
          <BlobPurple className="absolute bottom-0 right-0 min-w-0.5 w-2xl" />
        </section>

        {/* Section Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Flexible Pricing
                </h2>
                <p className="max-w-[900px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pilih harga yang sesuai dengan jenis bisnis anda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  className={cn("flex flex-col", {
                    "border-transparent": !plan.is_populer,
                  })}
                >
                  <CardHeader>
                    {plan.is_populer && (
                      <div className="text-sm font-semibold text-primary">
                        Most Popular
                      </div>
                    )}
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-bold">
                      ${plan.price}
                      <span className="ml-1 text-xl font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      {plan.benefits.map((benefit) => (
                        <li className="flex items-center">
                          <DotIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Kontak Kami
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apakah ada yang ingin anda tanyakan? tim kami siap menjawab
                  dengan responsif.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Alamat</h4>
                    <p className="text-muted-foreground">
                      Jl. ABC 2. no 3
                      <br />
                      Kalibata, Jakarta Selatan
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Telepon</h4>
                    <p className="text-muted-foreground">(626) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">
                      asharifauzan.h@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Waktu Operasional</h4>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 9am - 5pm
                      <br />
                      Sabtu & Minggu: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kontak Kami</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nama Depan
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nama Belakang
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Halo saya tertarik dengan ...."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
