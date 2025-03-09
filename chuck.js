const apiUrl = "https://api.chucknorris.io/jokes/random";

document.getElementById("get-joke-btn").addEventListener("click", () => {
    // Fetch API'yi çağır
    fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('API response not ok');
        }
        return response.json();
    })
    .then((data) => {
        const joke = data.value;
        document.getElementById("joke-container").innerText = joke;
        console.log(joke); // Konsola şaka yazdırma
    })
    .catch((error) => {
        console.error("Error fetching joke:", error);
    });
});
