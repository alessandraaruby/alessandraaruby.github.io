<template>
  <v-container class="container-content">

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><v-btn flat to="/">Home</v-btn></li>
    <li class="breadcrumb-item"><v-btn flat to="/articles">Articles</v-btn></li>
    <li class="breadcrumb-item active" aria-current="page"><v-btn>{{ item.title }}</v-btn></li>
  </ol>
</nav>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card tile>
          <v-card-media :src="item.imageURL" contain>
          </v-card-media>
         <img class="img-fluid" src="{{item.imageURL}}"/>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">{{ item.title }}</h3>

              <v-flex xs12 class="pl-0">
                  <span class="body-1">{{ item.date }}</span>
              </v-flex>

              <div v-if="item.desc" v-html="item.desc"></div>
            </div>

          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
@media only screen and (max-width: 320px) {  
  .mycarousel {
    height:100px;
  }
}
@media only screen and (max-width: 600px) {  
  .mycarousel {
    height:250px;
  }
}
@media only screen and (max-width: 961px) {  
  .mycarousel {
    height:350px;
  }
}
</style>