// ===============================
// NEWS-KH 24h - SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // CLOCK
    // ===============================

    function updateClock() {
        const clock = document.getElementById("clock");

        if (!clock) return;

        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateClock();
    setInterval(updateClock, 1000);


    // ===============================
    // SEARCH
    // ===============================

    const searchInput = document.getElementById("search");
    const searchSuggestion = document.getElementById("searchSuggestion");
    const cards = document.querySelectorAll(".card");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.trim();
            const searchTextLower = searchText.toLowerCase();


            // ===============================
            // SHOW SUGGESTION
            // ===============================

            if (searchSuggestion) {

                if (searchText === "កម្ពុជា") {

                    searchSuggestion.textContent =
                        "ព័ត៌មានថ្មីៗពីកម្ពុជា";

                    searchSuggestion.style.display = "block";
                    searchSuggestion.style.background = "#ffffff";
                    searchSuggestion.style.color = "#1261a0";
                    searchSuggestion.style.padding = "8px 15px";
                    searchSuggestion.style.marginTop = "5px";
                    searchSuggestion.style.borderRadius = "6px";
                    searchSuggestion.style.fontWeight = "bold";

                } else {

                    searchSuggestion.textContent = "";
                    searchSuggestion.style.display = "none";

                }
            }


            // ===============================
            // SEARCH NEWS CARDS
            // ===============================

            cards.forEach(function (card) {

                const title =
                    card.querySelector("h3")?.textContent.toLowerCase() || "";

                const description =
                    card.querySelector("p:not(.date)")?.textContent.toLowerCase() || "";

                const category =
                    card.dataset.category?.toLowerCase() || "";

                const imageAlt =
                    card.querySelector("img")?.alt.toLowerCase() || "";

                const found =
                    title.includes(searchTextLower) ||
                    description.includes(searchTextLower) ||
                    category.includes(searchTextLower) ||
                    imageAlt.includes(searchTextLower);

                if (searchTextLower === "" || found) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }


    // ===============================
    // CATEGORY FILTER
    // ===============================

    window.filterNews = function (category) {

        if (searchInput) {
            searchInput.value = "";
        }

        if (searchSuggestion) {
            searchSuggestion.textContent = "";
            searchSuggestion.style.display = "none";
        }

        cards.forEach(function (card) {

            if (card.dataset.category === category) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    };


    // ===============================
    // SHOW ALL NEWS
    // ===============================

    window.showAllNews = function () {

        if (searchInput) {
            searchInput.value = "";
        }

        if (searchSuggestion) {
            searchSuggestion.textContent = "";
            searchSuggestion.style.display = "none";
        }

        cards.forEach(function (card) {
            card.style.display = "";
        });

    };


    // ===============================
    // READ ARTICLE
    // ===============================

    window.readNews = function (id) {

 window.location.href = "article.html?id=" + id;

    };

});
