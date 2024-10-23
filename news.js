let url = "https://newsapi.org/v2/everything?q=technology&apiKey=44eb8057a79944c084c245c2a64a7eab";

let req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json();  // Parsear la respuesta JSON
    })
    .then(function(data) {
        // Noticia 1
        const firstArticle = data.articles[3];
        document.getElementById('title').textContent = firstArticle.title;
        document.querySelector('#noticia1 a').setAttribute('href', firstArticle.url);
        document.getElementById('image1').setAttribute('src', firstArticle.urlToImage);

        // Noticia 2
        const secondArticle = data.articles[4];
        document.getElementById("title2").textContent = secondArticle.title;
        document.querySelector('#noticia2 a').setAttribute('href', secondArticle.url);
        document.getElementById('image2').setAttribute('src', secondArticle.urlToImage);

        // Noticia 3
        const thirdArticle = data.articles[8];
        document.getElementById("title3").textContent = thirdArticle.title;
        document.querySelector('#noticia3 a').setAttribute('href', thirdArticle.url);
        document.getElementById('image3').setAttribute('src', thirdArticle.urlToImage);

        console.log(data)
    })
    .catch(function(error) {
        console.error("Error al obtener los datos:", error);
    });
