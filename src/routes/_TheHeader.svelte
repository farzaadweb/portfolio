<script lang="ts">
  import { fly } from "svelte/transition";
  import { HyperButton } from "$elements";

  const headerItems = [
    {
      name: "صفحه اصلی",
      href: "/",
    },
    {
      name: "نمونه کارها",
      href: "/work-samples",
    },
    {
      name: "سرویس‌ها",
      child: [
        {
          name: "خدمات",
          href: "/services",
        },
        {
          name: "لیست قیمت‌ها",
          href: "/price-list",
        },
        {
          name: "خدمات افزودنی",
          href: "/additive-services",
        },
        {
          name: "سایر",
          href: "/other",
        },
      ],
    },
    {
      name: "درباره من",
      href: "/about-me",
    },
    {
      name: "وبلاگ",
      href: "/blog",
    },
  ];

  let navbarStatus: boolean = false;
</script>

<!-- Desktop Size -->
<div class="h-16 hidden lg:flex justify-between items-center container">
  <div class="flex items-center gap-20">
    <a href="/"><img src="src/assets/logo.svg" alt="logo" class="w-8" /></a>
    <div class="flex gap-6">
      {#each headerItems as item}
        {#if item.child}
          <div
            class="relative z-40 group overflow-hidden hover:overflow-visible"
          >
            <span class="flex items-end gap-0.5 nav-item">
              {item.name}
              <img
                src="src/assets/icons/direction-down.svg"
                alt="direction-down"
                class="w-5"
              /></span
            >
            <div
              class="w-max absolute top-4 right-0 pt-4 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-300"
            >
              <ul
                class="list-disc space-y-2 bg-slate-50 shadow-2xl rounded-xl border-t-4 border-blue-600 py-4 px-8"
              >
                {#each item.child as child}
                  <li class="nav-item">
                    <a href={child.href}>{child.name}</a>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {:else}
          <a href={item.href} class="nav-item">{item.name}</a>
        {/if}
      {/each}
    </div>
  </div>
  <div class="flex items-center gap-4">
    <HyperButton type="button" style="nobackground" theme="primary" size="fit">
      <img src="src/assets/icons/search.svg" alt="call_icon" />
    </HyperButton>
    <HyperButton type="button" style="solid" theme="primary" size="sm"
      ><img
        src="src/assets/icons/call.svg"
        alt="call_icon"
        class="w-5 inline ml-1.5"
      /> تماس‌ با من
    </HyperButton>
  </div>
</div>

<style scoped>
  .nav-item {
    font-weight: 600;
    color: #525252;
    transition: all 0.1s;
    cursor: pointer;
    font-size: 15px;
  }
  .nav-item:hover {
    color: #6b7280;
  }
</style>
