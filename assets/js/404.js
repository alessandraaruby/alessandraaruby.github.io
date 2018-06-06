var article = [
  {
    "title": "Page not found",
    "desc": ["We're sorry, the page you looking for, NOT FOUND! Here what you can do:"],
    "back": ["Homepage"],
    "articles": ["Articles"],
    "contact": ["Contact"],
    "home": "/blog",
    "linkforarticles": "/blog/articles",
    "linkforcontact": "/blog/contact"
  }
];
var template = $.templates("#articles");
var htmlOutput = template.render(article);
$("#result").html(htmlOutput);
