
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, ExternalLink, ChevronDown, Clock, HelpCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
  const images = PlaceHolderImages.reduce((acc, img) => ({ ...acc, [img.id]: img }), {} as Record<string, any>);

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 grid-line-h">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-4 p-6 grid-line-v flex items-center">
            <h1 className="font-headline font-black text-2xl tracking-tighter uppercase">Glitch Coffee</h1>
          </div>
          <nav className="col-span-8 p-6 flex justify-end gap-8 items-center font-code text-xs">
            <a href="#philosophy" className="hover:text-muted-foreground transition-colors uppercase">Philosophy</a>
            <a href="#menu" className="hover:text-muted-foreground transition-colors uppercase">Menu</a>
            <a href="#gallery" className="hover:text-muted-foreground transition-colors uppercase">Gallery</a>
            <a href="#location" className="hover:text-muted-foreground transition-colors uppercase">Location</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Section id="hero" className="pt-24 md:pt-32 min-h-screen flex items-center">
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center grid-line-v">
          <motion.div {...fadeIn}>
            <span className="font-code text-xs text-muted-foreground uppercase tracking-widest mb-4 block">Established 2023</span>
            <h2 className="font-headline font-black text-6xl md:text-9xl tracking-tighter uppercase leading-[0.85] mb-8">
              Step Into<br />The Static
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
              Gak perlu dandan rapi, gak perlu jaga imej. Di sini tempatnya buat jeda sebentar dari bisingnya dunia. Duduk, nikmatin kopi, dan jadi diri sendiri aja.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="rounded-none border-white hover:bg-white hover:text-black font-code uppercase px-8 h-12 hover-glitch">
                <MessageCircle className="mr-2 h-4 w-4" /> Pesan via WhatsApp
              </Button>
              <Button variant="secondary" className="rounded-none font-code uppercase px-8 h-12">
                <MapPin className="mr-2 h-4 w-4" /> Cek Lokasi
              </Button>
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
              src={images['hero-coffee']?.imageUrl} 
              alt="Coffee" 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-700 hover-glitch"
              data-ai-hint="coffee pour"
            />
          </motion.div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section id="philosophy">
        <div className="col-span-12 md:col-span-4 p-8 md:p-16 grid-line-v flex flex-col justify-between">
          <motion.h3 {...fadeIn} className="font-headline font-black text-3xl uppercase">Handcrafted,<br />Unexpected,<br />Yours.</motion.h3>
          <div className="font-code text-xs text-muted-foreground uppercase mt-8">Philosophy — 01</div>
        </div>
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
          <motion.p {...fadeIn} className="font-body text-2xl md:text-4xl leading-tight">
            We celebrate the imperfections. The glitches in the everyday routine. Our open-air space is designed for authentic connections and raw experiences. No filters needed.
          </motion.p>
        </div>
      </Section>

      {/* Product Deep Dive */}
      <Section id="menu">
        <div className="col-span-12 md:col-span-6 p-0 grid-line-v">
          <div className="p-8 md:p-16 grid-line-h">
            <span className="font-code text-xs text-muted-foreground uppercase mb-4 block">Signature — 01</span>
            <h4 className="font-headline font-black text-4xl uppercase mb-4">Butterscotch Glitch</h4>
            <p className="font-body text-muted-foreground mb-8">
              Our signature sweet and salty escape. Rich butterscotch meeting perfectly extracted espresso, finished with a hint of sea salt.
            </p>
            <span className="font-code text-xl">IDR 38.000</span>
          </div>
          <div className="relative aspect-video overflow-hidden grayscale grayscale-hover-none transition-all">
            <Image 
              src={images['butterscotch-glitch']?.imageUrl} 
              alt="Butterscotch Glitch" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500 hover-glitch" 
              data-ai-hint="iced latte"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 p-0">
          <div className="p-8 md:p-16 grid-line-h">
            <span className="font-code text-xs text-muted-foreground uppercase mb-4 block">Signature — 02</span>
            <h4 className="font-headline font-black text-4xl uppercase mb-4">Static Black</h4>
            <p className="font-body text-muted-foreground mb-8">
              Pure, unadulterated, bold. Single origin beans roasted to highlight the complex acidity and clean finish. For the purists.
            </p>
            <span className="font-code text-xl">IDR 32.000</span>
          </div>
          <div className="relative aspect-video overflow-hidden grayscale">
            <Image 
              src={images['static-black']?.imageUrl} 
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
            <h3 className="font-headline font-black text-5xl uppercase">The Full Static</h3>
            <span className="font-code text-xs text-muted-foreground uppercase">Menu Essentials</span>
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
      <Section>
        <div className="col-span-12 md:col-span-6 p-8 md:p-16 grid-line-v flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-black text-4xl uppercase mb-8">Bring the glitch home</h3>
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-none font-code uppercase h-14 flex-1 hover-glitch border-[#333]">
                GoFood
              </Button>
              <Button variant="outline" className="rounded-none font-code uppercase h-14 flex-1 hover-glitch border-[#333]">
                ShopeeFood
              </Button>
            </div>
          </div>
          <p className="font-code text-xs text-muted-foreground uppercase mt-12 tracking-widest flex items-center">
            <Clock className="w-3 h-3 mr-2" /> Daily 09:00 — 21:00
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 p-8 md:p-16 flex flex-col justify-between bg-white text-black">
          <div>
            <h3 className="font-headline font-black text-4xl uppercase mb-4">Bottle Series</h3>
            <p className="font-body mb-8">
              Nikmatin Glitch Coffee di mana aja. Pre-order sekarang untuk pengiriman setiap hari Senin & Kamis. Tersedia dalam ukuran 250ml & 1 Liter.
            </p>
            <Button variant="default" className="bg-black text-white hover:bg-zinc-800 rounded-none font-code uppercase w-full h-14 hover-glitch">
              Join the PO
            </Button>
          </div>
          <span className="font-code text-xs uppercase mt-12 block text-center">LIMITED STOCK PER BATCH</span>
        </div>
      </Section>

      {/* Instagram Gallery */}
      <Section id="gallery">
        <div className="col-span-12 p-8 md:p-16">
          <div className="flex justify-between items-center mb-12">
            <h3 className="font-headline font-black text-5xl uppercase">Captured Moments</h3>
            <a href="#" className="font-code text-xs flex items-center hover:underline uppercase">
              <Instagram className="w-4 h-4 mr-2" /> Follow @glitchcoffee.id
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
                  src={images[id]?.imageUrl} 
                  alt={`Gallery ${idx}`} 
                  fill 
                  className="object-cover hover-glitch" 
                  data-ai-hint={images[id]?.imageHint}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Event & Gathering */}
      <Section>
        <div className="col-span-12 md:col-span-4 p-8 md:p-16 grid-line-v flex flex-col justify-center bg-[#111]">
          <h3 className="font-headline font-black text-5xl uppercase mb-6 leading-none">Your Event,<br />Our Vibe.</h3>
        </div>
        <div className="col-span-12 md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
          <p className="font-body text-2xl mb-12">
            Looking for a venue with character? We host everything from intimate weddings, office gatherings, to community workshops.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-none font-code uppercase h-12 hover-glitch">
              Inquiry Form
            </Button>
            <Button variant="ghost" className="rounded-none font-code uppercase h-12 flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> Hubungi Event Manager
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
            <h3 className="font-headline font-black text-2xl uppercase">Common Queries</h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6">Operational Hours</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6">
                Senin - Jumat: 09.00 - 21.00<br />
                Sabtu - Minggu: 08.00 - 22.00
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6">Order Methods</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6">
                Dine-in, Takeaway, WhatsApp Delivery, GoFood, & ShopeeFood.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-[#333]">
              <AccordionTrigger className="font-headline text-sm uppercase hover:no-underline py-6">Seating Capacity</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6">
                Kami punya area semi-outdoor yang cukup luas, cocok buat nongkrong rame-rame (30-40 pax).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-24 pb-12 border-t border-[#333]">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="font-headline font-black text-7xl md:text-9xl tracking-tighter uppercase leading-none mb-8">
                THIS IS YOUR<br />GLITCH MOMENT.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-8 font-code text-xs uppercase">
                <div className="flex flex-col gap-4">
                  <span className="text-muted-foreground">Location</span>
                  <span>Jl. Senopati No. 42<br />Jakarta Selatan</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-muted-foreground">Social</span>
                  <a href="#" className="hover:underline">Instagram</a>
                  <a href="#" className="hover:underline">TikTok</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#333] pt-12 gap-8">
            <span className="font-code text-[10px] text-muted-foreground uppercase tracking-widest">© 2024 GLITCH COFFEE ROASTERY. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-8 font-code text-[10px] uppercase tracking-widest">
              <a href="#" className="hover:text-white text-muted-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-white text-muted-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
