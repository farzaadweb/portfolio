<script lang="ts">
  export let height: "screen" | "fit" | string = "screen";
  export let backgroundColor: "primary" | "secondary" = "primary";
  export let padding: string = "py-16 lg:py-20";
  export let id: string = "";

  let currentHeight =
    {
      screen: "100vh",
      fit: "fit-content",
    }[height] || height;
  let currentBackgroundColor = {
    primary: "rgb(241, 245, 249)",
    secondary: "rgb(24, 24, 27)",
  }[backgroundColor];
  let currentPatternColor = {
    primary: "rgb(226, 232, 240)",
    secondary: "rgb(39, 39, 42)",
  }[backgroundColor];
  let currentFontColor = {
    primary: "rgb(39, 39, 42)",
    secondary: "rgb(226, 232, 240)",
  }[backgroundColor];

  let styleConfig = `--heigth: ${currentHeight};
    --background-color: ${currentBackgroundColor};
     --pattern-color: ${currentPatternColor};
      --font-color: ${currentFontColor};`;
</script>

<section class={`${padding}`} style={styleConfig} {id}>
  <div class="h-full container">
    <slot />
  </div>
</section>

<style scoped>
  section {
    color: var(--font-color);
    height: var(--heigth);
    background-color: var(--background-color);
    background-image: linear-gradient(var(--pattern-color) 1px, transparent 1px),
      linear-gradient(to right, var(--pattern-color) 1px, transparent 1px);
    background-size: 20px 20px;
  }
</style>
