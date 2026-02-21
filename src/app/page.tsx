"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Clock, HelpCircle, PhoneCall, Languages, Coffee, ShoppingCart, Menu, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const translations = {
  en: {
    navPhilosophy: "Philosophy",
    navMenu: "Menu",
    navGallery: "Gallery",
    navLocation: "Location",
    navOrder: "Order",
    heroEst: "Established 2024",
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
    menuShowMore: "Expand Menu",
    menuShowLess: "Collapse Menu",
    deliveryTitle: "Bring the glitch home",
    deliveryHours: "Daily 15:00 — 23:00",
    bottleTitle: "GLITCH POCKET",
    bottleDesc: "Enjoy Glitch Coffee anywhere. Pre-order now for delivery everyday. Available in 250ml.",
    joinPO: "SOON!",
    limitedStock: "LIMITED STOCK PER BATCH",
    capturedMoments: "Captured Moments",
    followUs: "Follow @glitchcoffee.id",
    eventTitle: "Your Event,\nOur Vibe.",
    eventDesc: "Looking for a venue with character? We host everything from intimate weddings, office gatherings, to community workshops.",
    contactEvent: "Contact Admin",
    commonQueries: "Common Queries",
    faqOpTitle: "Operational Hours",
    faqOpContent: "Tuesday - Sunday: 15:00 - 23:00",
    faqOrderTitle: "Order Methods",
    faqOrderContent: "Dine-in, Takeaway, WhatsApp Delivery, GoFood, & ShopeeFood.",
    faqSeatTitle: "Seating Capacity",
    faqSeatContent: "We have a spacious semi-outdoor area, perfect for hanging out (30-40 pax).",
    footerHeadline: "THIS IS YOUR GLITCH MOMENT.",
    footerAddress: "Jl. Mulawarman No. 170, Manggar\nBalikpapan Timur",
    footerRights: "© 2026 GLITCH COFFEE. ALL RIGHTS RESERVED."
  },
  id: {
    navPhilosophy: "Filosofi",
    navMenu: "Menu",
    navGallery: "Galeri",
    navLocation: "Lokasi",
    navOrder: "Pesan",
    heroEst: "Sejak 2024",
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
    menuShowMore: "Lihat Semua",
    menuShowLess: "Tutup Menu",
    deliveryTitle: "Bawa pulang glitch-mu",
    deliveryHours: "Setiap Hari 15:00 — 23:00",
    bottleTitle: "GLITCH POCKET",
    bottleDesc: "Nikmatin Glitch Coffee di mana aja. Pre-order sekarang untuk pengiriman setiap hari. Tersedia dalam ukuran 250ml.",
    joinPO: "SEGERA",
    limitedStock: "STOK TERBATAS PER BATCH",
    capturedMoments: "Momen Tertangkap",
    followUs: "Ikuti @glitchcoffee.id",
    eventTitle: "Acara Anda,\nVibe Kami.",
    eventDesc: "Mencari tempat dengan karakter? Kami melayani segalanya mulai dari pernikahan intim, kumpul kantor, hingga lokakarya komunitas.",
    contactEvent: "Hubungi Admin",
    commonQueries: "Pertanyaan Umum",
    faqOpTitle: "Jam Operasional",
    faqOpContent: "Selasa - Minggu: 15.00 - 23.00",
    faqOrderTitle: "Metode Pemesanan",
    faqOrderContent: "Dine-in, Takeaway, WhatsApp Delivery, GoFood, & ShopeeFood.",
    faqSeatTitle: "Kapasitas Tempat Duduk",
    faqSeatContent: "Kami punya area semi-outdoor yang cukup luas, cocok buat nongkrong rame-rame (30-40 pax).",
    footerHeadline: "INI MOMEN GLITCH KAMU.",
    footerAddress: "Jl. Mulawarman no. 170, manggar\nBalikpapan Timur",
    footerRights: "© 2026 GLITCH COFFEE. HAK CIPTA DILINDUNGI."
  }
};

const menuData = [
  {
    category: "MILK BLEND COFFEE",
    items: [
      { name: "White Glitch (Kopi Susu Klasik)", price: "18K" },
      { name: "Tropica Static (Kopi Susu Kelapa)", price: "18K" },
      { name: "Bit Berry (Kopi Susu Stroberi)", price: "18K" },
      { name: "Brown Signal (Kopi Susu Aren)", price: "18K" },
      { name: "Golden Delay (Kopi Susu Karamel)", price: "20K" },
      { name: "Soft Byte (Kopi Susu Vanila)", price: "20K" },
      { name: "Pandan Drift (Kopi Susu Pandan)", price: "20K" },
      { name: "Sunny Peel (Kopi Susu Pisang)", price: "20K" },
      { name: "Nut Stream (Kopi Susu Hazelnut)", price: "20K" },
      { name: "Monswift (Kopi Susu Cinnamon)", price: "22K" },
      { name: "Buttersync (Kopi Susu Butterscotch)", price: "22K" },
      { name: "Sweetflow (Kopi Susu Caramel Macchiato)", price: "22K" },
    ]
  },
  {
    category: "NOIR SERIES",
    items: [
      { name: "Americano", price: "18K" },
      { name: "Vietnam Drip", price: "20K" },
      { name: "Shakerato", price: "20K" },
      { name: "Extra Shot", price: "5K" },
    ]
  },
  {
    category: "NON COFFEE",
    items: [
      { name: "Dark Error (Coklat)", price: "18K" },
      { name: "Hazel Core (Coklat Hazelnut)", price: "20K" },
      { name: "Amber Echo (Coklat Karamel)", price: "20K" },
      { name: "Red Glint (Red Velvet)", price: "20K" },
      { name: "Green Pulse (Matcha)", price: "22K" },
    ]
  },
  {
    category: "FRESH VIBES",
    items: [
      { name: "Lychee-T (Teh Leci)", price: "19K" },
      { name: "Pixelade Blue (Leci Soda)", price: "21K" },
    ]
  }
];

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const t = translations[lang];

  const IG_LINK = "https://www.instagram.com/glitchcoffee.id/";
  const WA_ORDER_LINK = "https://wa.me/6289527539529?text=Halo%20kak%2C%20aku%20mau%20order%20Glitch%20Coffee%20nya%20dong!";
  const GOFOOD_LINK = "https://gofood.co.id/balikpapan/restaurant/toko-kopi-glitch-coffee-stadion-batakan--f5005098-6a23-40fe-8b0e-79b0126191b6";
  const SHOPEE_LINK = "https://shopee.co.id/now-food/shop/22328224?deep_and_deferred=1&shareChannel=copy_link&stm_medium=referral&stm_source=https%3A%2F%2Flnk.bio%2F-rw&uls_trackid=54vtd5gl00pv";
  const WA_EVENT_LINK = "https://wa.me/6289527539529?text=Halo%20kak%2C%20aku%20mau%20tanya-tanya%20untuk%20event%20dong!";

  const NavLinks = () => (
    <>
      <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors uppercase font-code tracking-tight">{t.navPhilosophy}</a>
      <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors uppercase font-code tracking-tight">{t.navMenu}</a>
      <a href="#delivery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors uppercase font-code tracking-tight flex items-center gap-1">
        <ShoppingCart className="w-3 h-3" /> {t.navOrder}
      </a>
      <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors uppercase font-code tracking-tight">{t.navGallery}</a>
      <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-muted-foreground transition-colors uppercase font-code tracking-tight">{t.navLocation}</a>
    </>
  );

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 grid-line-h">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-4 p-6 grid-line-v flex items-center justify-between md:justify-start">
            <a href="#hero" className="flex items-center h-8 md:h-10">
              <Image 
                src="/logo.png" 
                alt="Glitch Coffee Logo"
                width={200}
                height={60}
                className="h-full w-auto object-contain"
                priority
              />
            </a>
            <div className="md:hidden flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setLang(lang === "en" ? "id" : "en")}
                className="font-code text-xs uppercase p-0 h-auto hover:bg-transparent flex items-center gap-2"
              >
                {lang === "en" ? "ID" : "EN"}
              </Button>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-0 h-auto w-auto hover:bg-transparent">
                    <Menu className="w-6 h-6 text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-l border-[#333] text-white p-12">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="text-white uppercase font-headline">Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-8 font-code text-lg">
                    <NavLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <nav className="col-span-8 p-6 hidden md:flex justify-end gap-6 items-center font-code text-xs">
            <NavLinks />
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
            <h1 className="font-headline font-black text-6xl md:text-9xl tracking-tighter uppercase leading-[0.85] mb-8 whitespace-pre-line glitch-headline">
              {t.heroHeadline}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#delivery">
                <Button variant="outline" className="rounded-none border-white hover:bg-white hover:text-black font-code uppercase px-8 h-12 transition-colors">
                  <Coffee className="mr-2 h-4 w-4" /> {t.heroCaffeineBoost}
                </Button>
              </a>
              <a href="#location">
                <Button variant="secondary" className="rounded-none font-code uppercase px-8 h-12 transition-colors">
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
              src="/images/hero-coffee.jpg" 
              alt="Hero Coffee" 
              fill 
              className="object-cover"
              priority
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
      <Section>
        <div className="col-span-12 md:col-span-6 p-0 grid-line-v">
          <div className="p-8 md:p-16 grid-line-h">
            <span className="font-code text-xs text-muted-foreground uppercase mb-4 block">{t.menuSig1}</span>
            <h4 className="font-headline font-black text-4xl uppercase mb-4">Buttersync</h4>
            <p className="font-body text-muted-foreground mb-8">
              {t.menuDesc1}
            </p>
            <span className="font-code text-xl">IDR 22.000</span>
          </div>
          <div className="relative aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <Image 
              src="/images/butterscotch.jpg" 
              alt="Butterscotch" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 p-0">
          <div className="p-8 md:p-16 grid-line-h">
            <span className="font-code text-xs text-muted-foreground uppercase mb-4 block">{t.menuSig2}</span>
            <h4 className="font-headline font-black text-4xl uppercase mb-4">Americano</h4>
            <p className="font-body text-muted-foreground mb-8">
              {t.menuDesc2}
            </p>
            <span className="font-code text-xl">IDR 18.000</span>
          </div>
          <div className="relative aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <Image 
              src="/images/americano.jpg" 
              alt="Americano" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </Section>

      {/* Additional Menu List - Essentials */}
      <Section id="menu">
        <div className="col-span-12 p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <h3 className="font-headline font-black text-4xl md:text-5xl uppercase">{t.menuFull}</h3>
            <span className="font-code text-xs text-muted-foreground uppercase">{t.menuEssentials}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {menuData.map((cat, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-4">
                <h4 className="font-headline text-lg text-muted-foreground border-b border-[#333] pb-2 mb-2">{cat.category}</h4>
                <div className="flex flex-col gap-1">
                  {(isMenuExpanded ? cat.items : cat.items.slice(0, 3)).map((item, idx) => (
                    <div key={idx} className="flex justify-between py-3 border-b border-[#333]/30 hover:bg-white/5 transition-colors px-2 font-body group">
                      <span className="uppercase font-bold tracking-tight text-sm md:text-base group-hover:text-white transition-colors">{item.name}</span>
                      <span className="font-code text-muted-foreground text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setIsMenuExpanded(!isMenuExpanded)}
              className="rounded-none border-white/20 hover:border-white font-code uppercase px-12 h-14 transition-all"
            >
              {isMenuExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
              {isMenuExpanded ? t.menuShowLess : t.menuShowMore}
            </Button>
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
                <a href={GOFOOD_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="rounded-none font-code uppercase h-14 w-full border-[#333] transition-colors">
                    GoFood
                  </Button>
                </a>
                <a href={SHOPEE_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="rounded-none font-code uppercase h-14 w-full border-[#333] transition-colors">
                    ShopeeFood
                  </Button>
                </a>
              </div>
              <a href={WA_ORDER_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-none font-code uppercase h-14 w-full border-[#333] transition-colors">
                  <MessageCircle className="mr-2 h-4 w-4" /> {t.orderWhatsApp}
                </Button>
              </a>
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
            <Button variant="default" className="bg-black text-white hover:bg-zinc-800 rounded-none font-code uppercase w-full h-14 transition-colors">
              {t.joinPO}
            </Button>
          </div>
          <span className="font-code text-xs uppercase mt-12 block text-center">{t.limitedStock}</span>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery">
        <div className="col-span-12 p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h3 className="font-headline font-black text-4xl md:text-5xl uppercase">{t.capturedMoments}</h3>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="font-code text-xs flex items-center hover:underline uppercase">
              <Instagram className="w-4 h-4 mr-2" /> {t.followUs}
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6', 'hero-coffee', 'americano'].map((id, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-square bg-[#111] overflow-hidden grayscale hover:grayscale-0 transition-all cursor-crosshair"
              >
                <Image 
                  src={`/images/${id}.jpg`} 
                  alt={`Gallery ${idx}`} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Event & Gathering */}
      <Section>
        <div className="col-span-12 md:col-span-4 p-8 md:p-16 grid-line-v flex flex-col justify-center bg-[#111]">
          <h3 className="font-headline font-black text-4xl md:text-5xl uppercase mb-6 leading-none whitespace-pre-line">{t.eventTitle}</h3>
        </div>
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
          <p className="font-body text-xl md:text-2xl mb-12">
            {t.eventDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_EVENT_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="rounded-none font-code uppercase h-12 flex items-center gap-2 transition-colors">
                <PhoneCall className="w-4 h-4" /> {t.contactEvent}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Location & FAQ */}
      <Section id="location">
        <div className="col-span-12 md:col-span-7 grid-line-v min-h-[300px] md:min-h-[400px]">
          <div className="relative w-full h-full grayscale invert contrast-125">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8021!2d116.94825909951066!3d-1.236624933906585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147395633b499%3A0x868b813f5c71a396!2sJl.%20Mulawarman%20No.170%2C%20Manggar%2C%20Kec.%20Balikpapan%20Tim.%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076116!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '300px' }} 
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
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6 text-left">{t.faqOpTitle}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 whitespace-pre-line">
                {t.faqOpContent}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6 text-left">{t.faqOrderTitle}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 whitespace-pre-line">
                {t.faqOrderContent}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6 text-left">{t.faqSeatTitle}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 whitespace-pre-line">
                {t.faqSeatContent}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-24 pb-12 border-t border-[#333]">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-headline font-black text-xs md:text-sm tracking-[0.2em] uppercase mb-12 text-muted-foreground opacity-50">
              {t.footerHeadline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-4 font-code text-[10px] uppercase">
                <span className="text-muted-foreground">Location</span>
                <span className="whitespace-pre-line leading-relaxed">{t.footerAddress}</span>
              </div>
              <div className="flex flex-col items-center gap-4 font-code text-[10px] uppercase">
                <span className="text-muted-foreground">Social</span>
                <div className="flex gap-6">
                  <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-[#333] pt-12">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              {t.footerRights}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}