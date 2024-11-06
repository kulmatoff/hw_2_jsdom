const gallery = document.getElementById("main")
const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kyrgyzstan_-_48215582271.jpg/640px-Kyrgyzstan_-_48215582271.jpg",
"https://static.independent.co.uk/2022/02/24/15/newFile-4.jpg",
"https://triptokyrgyzstan.com/sites/default/files/styles/blog/public/media/image/8593086769_8818432aba_o.jpg.webp?itok=tb5hLAs2",
"https://trvlland.com/wp-content/uploads/2020/01/the-heart-of-kyrgyzstan-regular_9.jpg",
"https://cdn.britannica.com/03/58603-050-8A04D885/streambed-Kyrgyz-Range-Tien-Shan-Kyrgyzstan-Bishkek.jpg",
"https://cdn2.opendemocracy.net/media/images/129918.max-760x504.jpg",
"https://economist.kg/content/images/wp-content/uploads/2020/10/biznes-turizm-1200x630-1.jpg",
"https://cdn.britannica.com/45/190645-050-AC4B6D04/Lake-Ysyk-body-water-Kyrgyzstan.jpg",
"https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/cc/1683a9d3/764da5f875783f68c69f9b068b1b16a8646e8b42.jpeg",
"https://www.nomadasaurus.com/wp-content/uploads/2019/06/Travel-To-Kyrgyzstan-Guide.jpg",
"https://exploretraveloasis.com/wp-content/uploads/2023/02/Kel-Suu-Lake-4.jpeg",
"https://en.kabar.kg/site/assets/files/39230/qna_kirkhizia-nature_07-06-2023.jpeg",
"https://central-asia.guide/wp-content/uploads/2021/11/Chatyr_Kul_Kyrgyzstan_yurt.jpg"
]


images.forEach((e) => {
    const i = document.createElement("img");
    i.src = e;
    i.classList.add("gallery_image");
    i.addEventListener("click", (_) => {
        showFullView(e);
    });
    gallery.appendChild(i);
})

function showFullView(e) {
    const fullView = document.createElement("section");
    fullView.id = "full-view";

    const exitButt = document.createElement("button");
    exitButt.id = "close-button";
    exitButt.textContent = "X";

    const i = document.createElement("img");
    i.src = e;

    fullView.appendChild(exitButt);
    fullView.appendChild(i);

    gallery.appendChild(fullView);

    exitButt.addEventListener("click", (e) => {
        gallery.removeChild(fullView);
    })
}

function hideFullView() {
    document.getElementById("full-view").checkVisibility;
    console.log("segs")
}