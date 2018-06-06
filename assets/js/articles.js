//Index Articles
var article = [
  {
    "id": "animal",
    "date": "May 30, 2018",
    "author": "Alessandra",
    "title": "Miracle on Animals",
    "desc": ["Find out the list of Animals that mentioned in the Quran & Hadith...."],
    "img": "/html/contents/miracles-on-animal/image.jpg",
    "link": "#!animals"
  },
  {
    "id": "quranicdua",
    "date": "May 28, 2018",
    "author": "Alessandra",
    "title": "Quranic Duas",
    "desc": ["Useful duas or supplications from the Quran..."],
    "img": "/html/contents/quranic-dua/image.jpg",
    "link": "#!quranicdua"
  },
  {
    "id": "fake",
    "date": "May 24, 2018",
    "author": "Alessandra",
    "title": "Facebook Scumbag",
    "desc": ["Amirah is an Asian come from the poor country Philippine who created many fake Facebook accounts...."],
    "img": "/html/contents/facebook-scumbag/image.jpg",
    "link": "#!fbscams"
  }
];
var template = $.templates("#articles");
var htmlOutput = template.render(article);
$("#result").html(htmlOutput);
