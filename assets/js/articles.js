//Index Articles
var article = [
{
    "id": "fake",
    "date": "May 24, 2018",
    "author": "Alessandra",
    "title": "Facebook Catfishers",
    "desc": ["Amirah is an Asian come from the poor country Philippine who created many fake Facebook accounts...."],
    "img": "/html/contents/facebook-catfishers/image.jpg",
    "link": "https://alessandraaruby.github.io/#!fbscams"
  }
];
var template = $.templates("#articles");
var htmlOutput = template.render(article);
$("#result").html(htmlOutput);
