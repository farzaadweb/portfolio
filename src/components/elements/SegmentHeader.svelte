<script setup lang="ts">
  export let align: "left" | "center" | "right" = "center";
  export let theme: "dark" | "light";

  const currentFontColor = {
    light: "rgb(39, 39, 42)",
    dark: "rgb(226, 232, 240)",
  }[theme];

  const styleConfigs = `--font-color: ${currentFontColor}; --align-position: ${align}`;
</script>

<div class="segment-header w-full relative" style={styleConfigs}>
  <h1 class="text-4xl lg:text-5xl font-bold relative title">
    <span class="text-6xl lg:text-8xl"><slot /></span>
    <slot />
  </h1>
  {#if $$slots.description}
    <p class="text-sm mt-2.5 lg:mt-4 max-w-lg inline-block opacity-60">
      <slot name="description" />
    </p>{/if}
</div>

<style scoped>
  .segment-header {
    color: var(--font-color);
    text-align: var(--align-position);
  }

  .segment-header .title span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.1;
    font-family: "Dancing Script", cursive;
  }
</style>
