define(["VueRouter", 
        "vue!components/Home",
        "vue!components/Articles",
        "vue!components/ArticleDetail",
        "vue!components/About"
    ],
    function(VueRouter, 
        Home,
        Articles,
        ArticleDetail,
        About
    )
{
  Vue.use(VueRouter);
  
  return new VueRouter({
    routes: [
      {
          path: "/articles", 
          name: "Home", 
          component:Home
      },
      {
          path: "/article/:id", 
          name: "ArticleDetail", 
          component:ArticleDetail,
          props: true
      },
      {
          path: "/about", 
          name: "About",
          component:About
      },
      {
          path: "/", 
          name: "Home", 
          component:Home
      }
    ],
    //mode: 'history'
  });
});