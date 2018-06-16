<template>
 <v-app>
 <nav class="navbar navbar-light bg-light">
        <router-link to="/" class="navbar-brand" tag="span" style="cursor: pointer">
          {{ appName }}
        </router-link>
    <v-btn flat class="navbar-text" v-for="item in menuItems" 
          :key="item.title"
          :to="item.link"
          >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
 </nav>
    <main>
      <router-view></router-view>
    </main>  
  </v-app>
</template>
<script>
  define([], function()
  {
    return Vue.extend(
    {
      template: template,
      data: function() {
        return {
            sideNav: false,
            appName: "Alessandra",
            menuItems: [
                {icon: 'apps', title: 'About', link: '/about'}
            ]
        }
      }
    });
  });
</script>