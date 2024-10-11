// Tạo biến ban đầu
var newListElement = document.querySelector(".news-list");
var newList = [];
var htmlNewList = '';


// Lấy dữ liệu
var ApiNews =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=843f64552a4d42368e00090bec361c46";
fetch(ApiNews)
  .then((data) => {
    return data.json();
  })
  .then(function(data){
    newList = data.articles;
    newList.forEach(element => {
      var htmlItem = `
          <a class="news-card" href="${element.url}" target="_blank">
            <div>
              <h3 class="title">
                ${element.title}
              </h3>
            </div>
            <div>
              <span class="description">
              ${element.description}
              </span>
            </div>
            <div class="author-created">
              <span class="author">${element.author}</span>
              <span class="created-at">Create At: ${element.publishedAt}</span>
            </div>
            <div class="banner"><img class="banner-photo" src="${element.urlToImage}" alt=""></div>
          </a>
      `
      htmlNewList += htmlItem;
    });

    newListElement.innerHTML = htmlNewList;
  })
  .catch(() => {
    alert("Lỗi kìa ba");
  });






// var news = [
//   {
//     title: "abc",
//     author: "tac gia",
//     description: "mota",
//     content: "noi dung",
//     publishedAt: "2024-10-09T14:40:14Z",
//     url: "https://www.sfgate.com/shopping/article/fitness-gear-deals-october-prime-day-2024-19791571.php",
//     urlToImage:
//       "https://s.hdnux.com/photos/01/44/13/17/26260439/3/rawImage.jpg",
//   },
// ];