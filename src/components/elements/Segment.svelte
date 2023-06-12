<script lang="ts">
  export let height: "screen" | "fit" | string = "screen";
  export let backgroundColor: "primary" | "secondary";
  export let padding: string = "py-16 lg:py-20";
  export let container: boolean = true;
  export let id: string = "";

  let currentHeight =
    {
      screen: "100vh",
      fit: "fit-content",
    }[height] || height;

  // let currentBackgroundColor = {
  //   primary: "241 245 249",
  //   secondary: "241 245 249 / 0.7",
  // }[backgroundColor];

  // let currentPatternColor = {
  //   primary: "rgb(226, 232, 240)",
  //   secondary: "rgb(39, 39, 42)",
  // }[backgroundColor];

  // let currentFontColor = {
  //   primary: "rgb(39, 39, 42)",
  //   secondary: "rgb(226, 232, 240)",
  // }[backgroundColor];

  let styleConfig = `--heigth: ${currentHeight};`;

  // --background-color: ${currentBackgroundColor};
  //    --pattern-color: ${currentPatternColor};
  //     --font-color: ${currentFontColor};
</script>

<section class={`${padding}`} style={styleConfig} {id}>
  <div class={`h-full ${container ? "container" : ""}`}>
    <slot />
  </div>
</section>

<style scoped>
  section {
    color: var(--font-color);
    height: var(--heigth);
    /* background-color: rgb(var(--background-color)); */
    /* background: radial-gradient(
          circle,
          transparent 20%,
          var(--background-color) 20%,
          var(--background-color) 80%,
          transparent 80%,
          transparent
        )
        0% 0% / 30px 30px,
      radial-gradient(
          circle,
          transparent 20%,
          var(--background-color) 20%,
          var(--background-color) 80%,
          transparent 80%,
          transparent
        )
        15px 15px / 30px 30px,
      linear-gradient(var(--pattern-color) 2px, transparent 2px) 0px -1px / 15px
        15px,
      linear-gradient(
          90deg,
          var(--pattern-color) 2px,
          var(--background-color) 2px
        ) -1px 0px / 15px 15px var(--background-color);
    background-size: 30px 30px, 30px 30px, 15px 15px, 15px 15px; */
  }
</style>
