let createCard = (img, title, desc, date, month, year, topic) => {
    html = `<div class="card">
                <img class="card-img" src="${img}" alt="">
                <p class="card-title">${title}</p>
                <p class="card-desc" >${desc}</p>
                <div class="date-topic"><span class="card-date">${month} ${date}, ${year}</span> <div class="seperator"></div><span class="card-topic">${topic}</span></div>
            </div>`

    document.querySelector(".blogs").innerHTML += html
}  

createCard("assets/image2.png", "Python for the Absolute beginners", "Python is the most popular programming language out there and it is used for so many different industries.", 24, "June", 2022, "DevOps")
createCard("assets/image3.png", "Docker from Zero to Hero", "Learn what is Docker and  how Docker is used in the whole software development process.", 24, "June", 2022, "DevOps")
createCard("assets/image4.png", "Build continuous integration pipelines with GitHub Actions", "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.", 24, "June", 2022, "DevOps")
createCard("assets/image5.png", "Build continuous integration pipelines with GitHub Actions", "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.", 24, "June", 2022, "DevOps")
createCard("assets/image6.png", "Build continuous integration pipelines with GitHub Actions", "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.", 24, "June", 2022, "DevOps")
createCard("assets/image7.png", "Build continuous integration pipelines with GitHub Actions", "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.", 24, "June", 2022, "DevOps")
createCard("assets/image8.png", "Build continuous integration pipelines with GitHub Actions", "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.", 24, "June", 2022, "DevOps")
createCard("assets/image9.png", "Build continuous integration pipelines with GitHub Actions", "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.", 24, "June", 2022, "DevOps")