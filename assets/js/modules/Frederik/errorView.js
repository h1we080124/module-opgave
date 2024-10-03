export default function setupErrorView(status) {
    if (!status) {
        console.log('error');
        if (document.getElementById("lyrics")) {
            document.getElementById("lyrics").remove();
        }

        const section = document.getElementById("frederik");
        const lyricsSection = document.createElement("section");
        lyricsSection.id = "lyrics";
        const lyricsp = document.createElement("p");
        lyricsp.textContent = "No lyrics found, check your spelling and try again";
        lyricsSection.appendChild(lyricsp);
        section.appendChild(lyricsSection);
    }
}