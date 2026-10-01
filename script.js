document.addEventListener("DOMContentLoaded", () => {

    const post = document.querySelector(".instagram-post");
    const topics = document.querySelectorAll(".topic");
    const hero = document.querySelector(".hero");
    const brand = document.querySelector(".brand");
    const footer = document.querySelector(".footer");


    /* Initial state */

    post.style.opacity = "0";
    post.style.transform = "scale(0.96)";

    brand.style.opacity = "0";
    hero.style.opacity = "0";
    footer.style.opacity = "0";


    topics.forEach(topic => {
        topic.style.opacity = "0";
        topic.style.transform = "translateX(-20px)";
    });


    /* Post animation */

    setTimeout(() => {

        post.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        post.style.opacity = "1";

        post.style.transform = "scale(1)";

    }, 100);


    /* Brand animation */

    setTimeout(() => {

        brand.style.transition =
            "opacity 0.5s ease";

        brand.style.opacity = "1";

    }, 400);


    /* Hero animation */

    setTimeout(() => {

        hero.style.transition =
            "opacity 0.6s ease";

        hero.style.opacity = "1";

    }, 600);


    /* Topics animation */

    topics.forEach((topic, index) => {

        setTimeout(() => {

            topic.style.transition =
                "opacity 0.4s ease, transform 0.4s ease";

            topic.style.opacity = "1";

            topic.style.transform =
                "translateX(0)";

        }, 800 + (index * 100));

    });


    /* Footer animation */

    setTimeout(() => {

        footer.style.transition =
            "opacity 0.5s ease";

        footer.style.opacity = "1";

    }, 1500);

});