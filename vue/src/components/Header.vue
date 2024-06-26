<script>
import TitleSite from "@/components/TitleSite.vue";
export default {
  name: "Header",
  components: {TitleSite}
}
</script>

<template>
  <div class="fixed-top">
    <header>
      <div class="container">
        <TitleSite msg="Heroes de Marvel" />
      </div>
    </header>
  </div>
</template>