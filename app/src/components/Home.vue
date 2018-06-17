<template>
<div class="container container-content">
  <div class="row">
    <div class="col-sm" v-for="item in list" :key="item.id">
<div class="card mb-3">
  <img class="card-img-top" :src="item.imageURL">
  <div class="card-body">
    <h5 class="card-title">{{ item.title }}</h5>
    <p class="card-text">{{ item.shortDesc }}</p>
    <p class="card-text"><small class="text-muted">Last updated {{ item.date }}</small></p>
                <v-btn flat class="btn btn-secondary"
              :to="
                  {
                    name:'ArticleDetail', 
                    params:
                    {
                      id:item.id, 
                      item:item
                    }
                  }"
              >
              Continue reading
            </v-btn>
  </div>
</div>


    </div>
  </div>
</div>
</template>

<script>
  define([], function()
  {
    return Vue.extend({
      template,
      data:() => ({
        list: [
          {
            id: 1,
            title: "Miracle on Animals",
            author: "Alessandra",
            date: "May 30, 2018",
            shortDesc: "Find out the list of Animals that mentioned in the Quran & Hadith...",
            imageURL: "https://alessandraaruby.github.io/html/contents/quranic-dua/image.jpg",
            desc: "The temple ceremony in Alas Kedaton Temple is carried out every 210 days a year. It is on <i>Anggarakasih Medangsia</i> (Balinese Hindu calendar) or on every Tuesday where on that time the society do the worship or pray to request the safety and prosperity. The unique in this ceremony is do not use the fire and do not hence Penjor and also finished before the sunset or before the night is come."
          },
          {
            id: 2,
            title: "Quranic Duas",
            author: "Alessandra",
            date: "May 28, 2018",
            shortDesc: "Useful duas or supplications from the Quran...",
            imageURL: "https://alessandraaruby.github.io/html/contents/quranic-dua/image.jpg",
            desc: "Pandanus War or localy known as <i>Mekare-kare</i> is an annual theatrical fight between the young men of the village, utilising prickly pandanus leaf whips! Each dual is staged to the intense martial sounds of <i>gamelan selonding</i> music, and lasts only a few seconds, accompanied by much merriment and laughter."
          },
          {
            id: 3,
            title: "Facebook Scumbag",
            author: "Alessandra",
            date: "May 24, 2018",
            shortDesc: "Amirah is an Asian come from the poor country Philippine who created many fake Facebook accounts...",
            imageURL: "https://alessandraaruby.github.io/html/contents/facebook-scumbag/image.jpg",
            desc: "Cremation is guiding the soul of the deceased family member from hell and underworld to divine realms, later to be reborn in the next generation of the same family. Long preparations proceed cremation ceremonies.<br>Each family uses a certain type of sarcophagus, sculptures formed as mythical animals, according to their cast. A black or white bull is used for a Brahman cast, together with a tower-shaped sarcophage called bade, with roofs like a pagode."
          }
        ]
      })/*,
      mounted(){
        console.log(this.$route);
      }*/
    });
  });
</script>
<style>

</style>