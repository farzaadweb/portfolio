<script lang="ts">
  import { Navigation, Pagination, Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { technologys } from "$data/technologys";
  import "swiper/css";
</script>

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={3}
  spaceBetween={20}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 60,
    },
  }}
>
  {#each technologys as tech}
    <SwiperSlide>
      <div
        class="w-full h-full bg-zinc-700 rounded-xl py-1 px-2 border border-zinc-600
         shadow-inner shadow-zinc-800 relative z-40 tech-box overflow-hidden"
      >
        <a href={tech.techSourceLink} title={tech.techName} target="_blank">
          <img
            src={tech.techImage}
            alt={tech.techImage}
            class="w-20 md:w-28 mx-auto"
          /></a
        >
      </div>
    </SwiperSlide>
  {/each}
</Swiper>

<style scoped>
  .tech-box::before {
    content: "a";
    position: absolute;
    left: 30px;
    top: 30px;
    width: 50px;
    height: 50px;
    z-index: -1;
    background-color: #dc2626;
    filter: blur(30px);
    opacity: 0;
    transition: all 0.2s;
  }
  .tech-box:hover::before {
    opacity: 1;
  }
</style>
