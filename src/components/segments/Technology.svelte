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
      slidesPerView: 9,
      spaceBetween: 30,
    },
  }}
>
  {#each technologys as tech}
    <SwiperSlide>
      <div class="w-full h-full py-1 px-2">
        <a href={tech.techSourceLink} title={tech.techName} target="_blank">
          <img
            src={tech.techImage}
            alt={tech.techImage}
            class="w-20 md:w-28 mx-auto grayscale opacity-30"
          /></a
        >
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
