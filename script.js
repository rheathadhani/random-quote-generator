
const url = "https://api.kanye.rest";
const quote_text = document.getElementById("quoteText");

function displayQuote() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            quote_text.innerHTML = data.quote;

        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
}

document.getElementById("new-quote").addEventListener("click", ()=>{
    const author_text = document.getElementById("quoteAuthor");

    if (quote_text != ""){
        setTimeout(() => {
            author_text.innerHTML = "Kanye West";
        }, 120);
    }
});
