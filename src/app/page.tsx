
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Clock, HelpCircle, PhoneCall, Languages, Coffee, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const translations = {
  en: {
    navPhilosophy: "Philosophy",
    navMenu: "Menu",
    navGallery: "Gallery",
    navLocation: "Location",
    navOrder: "Order",
    heroEst: "Established 2023",
    heroHeadline: "Step Into\nThe Static",
    heroDesc: "No need to dress up, no need to keep up appearances. Here is a place to pause for a moment from the world's noise. Sit down, enjoy your coffee, and just be yourself.",
    heroCaffeineBoost: "Get your caffeine boost",
    orderWhatsApp: "Order via WhatsApp",
    checkLocation: "Check Location",
    phiTitle: "Handcrafted,\nUnexpected,\nYours.",
    phiLabel: "Philosophy — 01",
    phiDesc: "We celebrate the imperfections. The glitches in the everyday routine. Our open-air space is designed for authentic connections and raw experiences. No filters needed.",
    menuSig1: "Signature — 01",
    menuSig2: "Signature — 02",
    menuDesc1: "Our signature sweet and salty escape. Rich butterscotch meeting perfectly extracted espresso, finished with a hint of sea salt.",
    menuDesc2: "Pure, unadulterated, bold. Single origin beans roasted to highlight the complex acidity and clean finish. For the purists.",
    menuFull: "The Full Static",
    menuEssentials: "Menu Essentials",
    deliveryTitle: "Bring the glitch home",
    deliveryHours: "Daily 09:00 — 21:00",
    bottleTitle: "Bottle Series",
    bottleDesc: "Enjoy Glitch Coffee anywhere. Pre-order now for delivery every Monday & Thursday. Available in 250ml & 1 Liter sizes.",
    joinPO: "Join the PO",
    limitedStock: "LIMITED STOCK PER BATCH",
    capturedMoments: "Captured Moments",
    followUs: "Follow @glitchcoffee.id",
    eventTitle: "Your Event,\nOur Vibe.",
    eventDesc: "Looking for a venue with character? We host everything from intimate weddings, office gatherings, to community workshops.",
    inquiryForm: "Inquiry Form",
    contactEvent: "Contact Event Manager",
    commonQueries: "Common Queries",
    faqOpTitle: "Operational Hours",
    faqOpContent: "Monday - Friday: 09:00 - 21:00\nSaturday - Sunday: 08:00 - 22:00",
    faqOrderTitle: "Order Methods",
    faqOrderContent: "Dine-in, Takeaway, WhatsApp Delivery, GoFood, & ShopeeFood.",
    faqSeatTitle: "Seating Capacity",
    faqSeatContent: "We have a spacious semi-outdoor area, perfect for hanging out (30-40 pax).",
    footerHeadline: "THIS IS YOUR\nGLITCH MOMENT.",
    footerAddress: "Jl. Senopati No. 42\nJakarta Selatan",
    footerRights: "© 2024 GLITCH COFFEE ROASTERY. ALL RIGHTS RESERVED."
  },
  id: {
    navPhilosophy: "Filosofi",
    navMenu: "Menu",
    navGallery: "Galeri",
    navLocation: "Lokasi",
    navOrder: "Pesan",
    heroEst: "Sejak 2023",
    heroHeadline: "Step Into\nThe Static",
    heroDesc: "Gak perlu dandan rapi, gak perlu jaga imej. Di sini tempatnya buat jeda sebentar dari bisingnya dunia. Duduk, nikmatin kopi, dan jadi diri sendiri aja.",
    heroCaffeineBoost: "Dapatkan asupan kafeinmu",
    orderWhatsApp: "Pesan via WhatsApp",
    checkLocation: "Cek Lokasi",
    phiTitle: "Handcrafted,\nUnexpected,\nYours.",
    phiLabel: "Filosofi — 01",
    phiDesc: "Kami merayakan ketidaksempurnaan. 'Glitch' dalam rutinitas sehari-hari. Ruang terbuka kami dirancang untuk koneksi otentik dan pengalaman murni. Tanpa filter.",
    menuSig1: "Signature — 01",
    menuSig2: "Signature — 02",
    menuDesc1: "Pelarian manis dan asin khas kami. Butterscotch kaya rasa berpadu dengan espresso yang diekstrak sempurna, diakhiri dengan sentuhan garam laut.",
    menuDesc2: "Murni, tanpa campuran, berani. Biji kopi single origin dipanggang untuk menonjolkan keasaman kompleks dan hasil akhir yang bersih. Untuk para pemurni.",
    menuFull: "The Full Static",
    menuEssentials: "Esensi Menu",
    deliveryTitle: "Bawa pulang glitch-mu",
    deliveryHours: "Setiap Hari 09:00 — 21:00",
    bottleTitle: "Bottle Series",
    bottleDesc: "Nikmatin Glitch Coffee di mana aja. Pre-order sekarang untuk pengiriman setiap hari Senin & Kamis. Tersedia dalam ukuran 250ml & 1 Liter.",
    joinPO: "Ikut PO",
    limitedStock: "STOK TERBATAS PER BATCH",
    capturedMoments: "Momen Tertangkap",
    followUs: "Ikuti @glitchcoffee.id",
    eventTitle: "Acara Anda,\nVibe Kami.",
    eventDesc: "Mencari tempat dengan karakter? Kami melayani segalanya mulai dari pernikahan intim, kumpul kantor, hingga lokakarya komunitas.",
    inquiryForm: "Formulir Inquiry",
    contactEvent: "Hubungi Manajer Event",
    commonQueries: "Pertanyaan Umum",
    faqOpTitle: "Jam Operasional",
    faqOpContent: "Senin - Jumat: 09.00 - 21.00\nSabtu - Minggu: 08.00 - 22.00",
    faqOrderTitle: "Metode Pemesanan",
    faqOrderContent: "Dine-in, Takeaway, WhatsApp Delivery, GoFood, & ShopeeFood.",
    faqSeatTitle: "Kapasitas Tempat Duduk",
    faqSeatContent: "Kami punya area semi-outdoor yang cukup luas, cocok buat nongkrong rame-rame (30-40 pax).",
    footerHeadline: "INI MOMEN\nGLITCH KAMU.",
    footerAddress: "Jl. Senopati No. 42\nJakarta Selatan",
    footerRights: "© 2024 GLITCH COFFEE ROASTERY. HAK CIPTA DILINDUNGI."
  }
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`grid-line-h w-full ${className}`}>
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[100px]">
      {children}
    </div>
  </section>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function GlitchCoffeeLanding() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const t = translations[lang];
  const images = PlaceHolderImages.reduce((acc, img) => ({ ...acc, [img.id]: img }), {} as Record<string, any>);

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 grid-line-h">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-4 p-6 grid-line-v flex items-center">
            <h1 className="font-headline font-black text-2xl tracking-tighter uppercase">Glitch Coffee</h1>
          </div>
          <nav className="col-span-8 p-6 flex justify-end gap-6 items-center font-code text-xs">
            <a href="#philosophy" className="hover:text-muted-foreground transition-colors uppercase hidden lg:block">{t.navPhilosophy}</a>
            <a href="#menu" className="hover:text-muted-foreground transition-colors uppercase hidden md:block">{t.navMenu}</a>
            <a href="#delivery" className="hover:text-muted-foreground transition-colors uppercase flex items-center gap-1">
              <ShoppingCart className="w-3 h-3" /> {t.navOrder}
            </a>
            <a href="#gallery" className="hover:text-muted-foreground transition-colors uppercase hidden md:block">{t.navGallery}</a>
            <a href="#location" className="hover:text-muted-foreground transition-colors uppercase hidden md:block">{t.navLocation}</a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="font-code text-xs uppercase p-0 h-auto hover:bg-transparent flex items-center gap-2"
            >
              <Languages className="w-3 h-3" />
              {lang === "en" ? "ID" : "EN"}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Section id="hero" className="pt-24 md:pt-32 min-h-screen flex items-center">
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center grid-line-v">
          <motion.div {...fadeIn}>
            <span className="font-code text-xs text-muted-foreground uppercase tracking-widest mb-4 block">{t.heroEst}</span>
            <h2 className="font-headline font-black text-6xl md:text-9xl tracking-tighter uppercase leading-[0.85] mb-8 whitespace-pre-line">
              {t.heroHeadline}
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#delivery">
                <Button variant="outline" className="rounded-none border-white hover:bg-white hover:text-black font-code uppercase px-8 h-12 hover-glitch">
                  <Coffee className="mr-2 h-4 w-4" /> {t.heroCaffeineBoost}
                </Button>
              </a>
              <a href="#location">
                <Button variant="secondary" className="rounded-none font-code uppercase px-8 h-12">
                  <MapPin className="mr-2 h-4 w-4" /> {t.checkLocation}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-4 p-8 flex items-center justify-center bg-[#111]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-square grayscale overflow-hidden"
          >
            <Image 
              src={images['hero-coffee']?.imageUrl || "https://picsum.photos/seed/hero/800/800"} 
              alt="Coffee" 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-700 hover-glitch"
              data-ai-hint="espresso pour"
            />
          </motion.div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section id="philosophy">
        <div className="col-span-12 md:col-span-4 p-8 md:p-16 grid-line-v flex flex-col justify-between">
          <motion.h3 {...fadeIn} className="font-headline font-black text-3xl uppercase whitespace-pre-line">{t.phiTitle}</motion.h3>
          <div className="font-code text-xs text-muted-foreground uppercase mt-8">{t.phiLabel}</div>
        </div>
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
          <motion.p {...fadeIn} className="font-body text-2xl md:text-4xl leading-tight">
            {t.phiDesc}
          </motion.p>
        </div>
      </Section>

      {/* Product Deep Dive */}
      <Section id="menu">
        <div className="col-span-12 md:col-span-6 p-0 grid-line-v">
          <div className="p-8 md:p-16 grid-line-h">
            <span className="font-code text-xs text-muted-foreground uppercase mb-4 block">{t.menuSig1}</span>
            <h4 className="font-headline font-black text-4xl uppercase mb-4">Butterscotch Glitch</h4>
            <p className="font-body text-muted-foreground mb-8">
              {t.menuDesc1}
            </p>
            <span className="font-code text-xl">IDR 38.000</span>
          </div>
          <div className="relative aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <Image 
              src={images['butterscotch-glitch']?.imageUrl || "https://picsum.photos/seed/latte/800/450"} 
              alt="Butterscotch Glitch" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 hover-glitch" 
              data-ai-hint="iced latte"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 p-0">
          <div className="p-8 md:p-16 grid-line-h">
            <span className="font-code text-xs text-muted-foreground uppercase mb-4 block">{t.menuSig2}</span>
            <h4 className="font-headline font-black text-4xl uppercase mb-4">Static Black</h4>
            <p className="font-body text-muted-foreground mb-8">
              {t.menuDesc2}
            </p>
            <span className="font-code text-xl">IDR 32.000</span>
          </div>
          <div className="relative aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <Image 
              src={images['static-black']?.imageUrl || "https://picsum.photos/seed/black/800/450"} 
              alt="Static Black" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 hover-glitch"
              data-ai-hint="black coffee"
            />
          </div>
        </div>
      </Section>

      {/* Additional Menu List */}
      <Section>
        <div className="col-span-12 p-8 md:p-16">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-headline font-black text-5xl uppercase">{t.menuFull}</h3>
            <span className="font-code text-xs text-muted-foreground uppercase">{t.menuEssentials}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 font-body">
            {[
              { name: "Americano", price: "28k" },
              { name: "Caffe Latte", price: "35k" },
              { name: "Flat White", price: "35k" },
              { name: "Cappuccino", price: "35k" },
              { name: "Manual Brew (V60)", price: "40k" },
              { name: "Cold Brew Static", price: "38k" },
              { name: "Glitch Matcha", price: "38k" },
              { name: "Dark Choco Glitch", price: "38k" },
              { name: "Lychee Tea", price: "30k" },
              { name: "Peach Static Tea", price: "30k" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between py-4 border-b border-[#333] hover:bg-white/5 transition-colors px-2">
                <span className="uppercase font-bold tracking-tight">{item.name}</span>
                <span className="font-code text-muted-foreground">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Online Delivery & Bottle Series */}
      <Section id="delivery">
        <div className="col-span-12 md:col-span-6 p-8 md:p-16 grid-line-v flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-black text-4xl uppercase mb-8">{t.deliveryTitle}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Button variant="outline" className="rounded-none font-code uppercase h-14 flex-1 hover-glitch border-[#333]">
                  GoFood
                </Button>
                <Button variant="outline" className="rounded-none font-code uppercase h-14 flex-1 hover-glitch border-[#333]">
                  ShopeeFood
                </Button>
              </div>
              <Button variant="outline" className="rounded-none font-code uppercase h-14 w-full hover-glitch border-[#333]">
                <MessageCircle className="mr-2 h-4 w-4" /> {t.orderWhatsApp}
              </Button>
            </div>
          </div>
          <p className="font-code text-xs text-muted-foreground uppercase mt-12 tracking-widest flex items-center">
            <Clock className="w-3 h-3 mr-2" /> {t.deliveryHours}
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 p-8 md:p-16 flex flex-col justify-between bg-white text-black">
          <div>
            <h3 className="font-headline font-black text-4xl uppercase mb-4">{t.bottleTitle}</h3>
            <p className="font-body mb-8">
              {t.bottleDesc}
            </p>
            <Button variant="default" className="bg-black text-white hover:bg-zinc-800 rounded-none font-code uppercase w-full h-14 hover-glitch">
              {t.joinPO}
            </Button>
          </div>
          <span className="font-code text-xs uppercase mt-12 block text-center">{t.limitedStock}</span>
        </div>
      </Section>

      {/* Instagram Gallery */}
      <Section id="gallery">
        <div className="col-span-12 p-8 md:p-16">
          <div className="flex justify-between items-center mb-12">
            <h3 className="font-headline font-black text-5xl uppercase">{t.capturedMoments}</h3>
            <a href="#" className="font-code text-xs flex items-center hover:underline uppercase">
              <Instagram className="w-4 h-4 mr-2" /> {t.followUs}
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6', 'hero-coffee', 'static-black'].map((id, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-square bg-[#111] overflow-hidden grayscale hover:grayscale-0 transition-all cursor-crosshair"
              >
                <Image 
                  src={images[id]?.imageUrl || `https://picsum.photos/seed/${id}/600/600`} 
                  alt={`Gallery ${idx}`} 
                  fill 
                  className="object-cover hover-glitch" 
                  data-ai-hint={images[id]?.imageHint || "coffee vibe"}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Event & Gathering */}
      <Section>
        <div className="col-span-12 md:col-span-4 p-8 md:p-16 grid-line-v flex flex-col justify-center bg-[#111]">
          <h3 className="font-headline font-black text-5xl uppercase mb-6 leading-none whitespace-pre-line">{t.eventTitle}</h3>
        </div>
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
          <p className="font-body text-2xl mb-12">
            {t.eventDesc}
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-none font-code uppercase h-12 hover-glitch">
              {t.inquiryForm}
            </Button>
            <Button variant="ghost" className="rounded-none font-code uppercase h-12 flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> {t.contactEvent}
            </Button>
          </div>
        </div>
      </Section>

      {/* Location & FAQ */}
      <Section id="location">
        <div className="col-span-12 md:col-span-7 grid-line-v min-h-[400px]">
          <div className="relative w-full h-full grayscale invert contrast-125">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 p-8 md:p-16 bg-black">
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="w-5 h-5" />
            <h3 className="font-headline font-black text-2xl uppercase">{t.commonQueries}</h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6">{t.faqOpTitle}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 whitespace-pre-line">
                {t.faqOpContent}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6">{t.faqOrderTitle}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 whitespace-pre-line">
                {t.faqOrderContent}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6">{t.faqSeatTitle}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 whitespace-pre-line">
                {t.faqSeatContent}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-24 pb-12 border-t border-[#333]">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-headline font-black text-2xl md:text-3xl tracking-tighter uppercase leading-none mb-8 text-center">
              {t.footerHeadline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl">
              <div className="flex flex-col items-center md:items-start gap-4 font-code text-xs uppercase">
                <span className="text-muted-foreground">Location</span>
                <span className="whitespace-pre-line text-center md:text-left">{t.footerAddress}</span>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4 font-code text-xs uppercase">
                <span className="text-muted-foreground">Social</span>
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">TikTok</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-[#333] pt-12">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest text-center">{t.footerRights}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
