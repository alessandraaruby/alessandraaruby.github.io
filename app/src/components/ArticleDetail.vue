<template>
  <div class="container">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><v-btn flat to="/">Home</v-btn></li>
    <li class="breadcrumb-item"><v-btn flat to="/articles">Articles</v-btn></li>
    <li class="breadcrumb-item active" aria-current="page"><v-btn>{{ item.title }}</v-btn></li>
  </ol>
</nav>
  <div class="content-title"><h3>{{ item.title }}</h3></div>
   <p><small>Last updated at {{ item.date }} by {{ item.author }}</small></p>
   <div class="featured-post">
    <img class="img-fluid" :src="item.imageURL">
   </div>
    <div class="content-post">
     <div v-if="item.desc" v-html="item.desc"></div>
    </div>
  </div>
</template>
<script>
 define([], function()
 {
    return Vue.extend({
        template,
        props: ["id", "item"]
        /*data:() => (){
            
        })*/
    });
 });
</script>
<style>

</style>