<script lang="ts">
  import { Navigation, Pagination, Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { HyperButton } from "$elements";
  import { slice } from "$data/articles";
  import "swiper/css";

  let tagsColorGenerator = () => {
    let colorList = ["red", "green", "blue", "yellow", "indigo", "pink"];
    let randomNumber: number = Math.floor(Math.random() * colorList.length);
    return `bg-${colorList[randomNumber]}-500`;
  };
</script>

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={1}
  spaceBetween={10}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }}
>
  {#each slice(8) as article}
    <SwiperSlide
      class="bg-slate-100 rounded-2xl py-5 px-6 text-slate-800 shadow-xl"
    >
      <h1 class="text-2xl font-bold">{article.title}</h1>
      <div class="mt-1 flex flex-wrap gap-2">
        {#each article.tag as tag}
          <span
            class="{tagsColorGenerator()} text-sm px-3 py-0.5 rounded-full inline-block text-white italic"
            >{tag}
          </span>
        {/each}
      </div>
      <div class="mt-4 h-24 overflow-hidden rounded-2xl">
        <img
          src={article.imgSrc}
          alt="code"
          loading="lazy"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <p class="text-sm text-slate-500 mt-4 line-clamp-2">
        {article.description}
      </p>
      <div class="mt-4">
        <HyperButton
          type="link"
          href={`/articles/${article.id}`}
          size="lg"
          theme="primary"
          block>Read More</HyperButton
        >
      </div>
    </SwiperSlide>
  {/each}
</Swiper>

<div class="flex mt-8">
  <div
    class="bg-slate-700 px-4 py-1.5 flex items-center gap-3 mx-auto rounded-2xl"
  >
    <button class="swiper-button-prev">
      <img src="src/assets/icons/arrow-left-circle.svg" alt="" />
    </button>
    <button class="swiper-button-next">
      <img src="src/assets/icons/arrow-right-circle.svg" alt="" />
    </button>
  </div>
</div>
