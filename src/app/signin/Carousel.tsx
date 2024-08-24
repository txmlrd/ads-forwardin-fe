"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";

function Carousel() {
  return (
    <div className="relative w-full">
      <Swiper modules={[Autoplay, EffectFade]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000 }} fadeEffect={{ crossFade: true }} effect="fade" className="mySwiper">
        <SwiperSlide>
          <section id="section1">
            <div className="flex flex-col min-h-screen items-center justify-center w-[465px] mx-auto text-black">
              <div className="relative w-full h-[300px] ">
                <Image src="/images/signin/dashboard.png" alt="dashboard" layout="fill" objectFit="contain" className=" absolute inset-0" />
              </div>
              <div className="space-y-5 mt-5">
                <h1 className="font-lexa text-[24px] font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1>
                <p className="font-inter text-[14px] font-bold">
                  Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur
                  sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section id="section2">
            <div className="flex flex-col min-h-screen items-center justify-center w-[465px] mx-auto text-black">
              <div className="relative w-full h-[300px] ">
                <Image src="/images/signin/broadcasttools.png" alt="broadcast" layout="fill" objectFit="contain" className=" absolute inset-0" />
              </div>
              <div className="space-y-5 mt-5">
                <h1 className="font-lexa text-[24px] font-bold">Reach Further with Ease</h1>
                <p className="font-inter text-[14px] font-bold">
                  Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah
                  ini.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section id="section3">
            <div className="flex flex-col min-h-screen items-center justify-center w-[465px] mx-auto text-black">
              <div className="relative w-full h-[300px] ">
                <Image src="/images/signin/campaigntools.png" alt="campaign" layout="fill" objectFit="contain" className=" absolute inset-0" />
              </div>
              <div className="space-y-5 mt-5">
                <h1 className="font-lexa text-[24px] font-bold">Right Time, Effective Messages</h1>
                <p className="font-inter text-[14px] font-bold">
                  Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap
                  pesan iklan memiliki dampak yang lebih besar.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section id="section4">
            <div className="flex flex-col min-h-screen items-center justify-center w-[465px] mx-auto text-black">
              <div className="relative w-full h-[300px] ">
                <Image src="/images/signin/autoreply.png" alt="autoreply" layout="fill" objectFit="contain" className=" absolute inset-0" />
              </div>
              <div className="space-y-5 mt-5">
                <h1 className="font-lexa text-[24px] font-bold">Respond Faster with the Convenience of Auto Reply</h1>
                <p className="font-inter text-[14px] font-bold">
                  Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan
                  energi Anda. Tanggap lebih cepat dengan Fowardin.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
