<template>
 <div class="container container-content">
    {{ title }}
 </div>
</template>
<script>
  define([], function()
  {
    return Vue.extend({
      template,
      data:() => ({
        title: "About us"
      })
    });
  });
</script>