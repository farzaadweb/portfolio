<script lang="ts">
  import TheHeader from "./_TheHeader.svelte";
  import TheFooter from "./_TheFooter.svelte";
  import "../assets/css/default.css";
</script>

<header><TheHeader /></header>
<slot />
<footer><TheFooter /></footer>
