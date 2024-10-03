import setupLyricsView from "./lyricsView.js";
import setupErrorView from "./errorView.js";

export default function searchLyrics(artist, title) {
    let status = false; // Initialize status as true
    console.log('fetch');
    

    const fetchWithTimeout = (url, options, timeout = 1000) => {
        return Promise.race([
            fetch(url,),
            new Promise((_, reject) =>
                setTimeout(() => {
                    setupErrorView(status);
                    reject(new Error('Request timed out'));
                }, timeout)
            )
        ]);
    };

    return fetchWithTimeout(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            status = true;
            setupLyricsView(data.lyrics, artist, title, status);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}