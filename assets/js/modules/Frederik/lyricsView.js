export default function setupLyricsView(lyrics, artist, title, status) {
    const section = document.getElementById("frederik");
    const lyricsSection = document.createElement("section");
    lyricsSection.id = "lyrics";
    console.log(status);
    
    if (document.getElementById("lyrics")) {
        document.getElementById("lyrics").remove();
    }
    section.appendChild(lyricsSection);

       
        
        const lyricsp = document.createElement("p");
        const artisth2 = document.createElement("h2");
        const titleh2 = document.createElement("h2");
        titleh2.id = "title";
        artisth2.textContent = artist;
        titleh2.textContent = title;
        lyricsp.textContent = lyrics;
        lyricsp.innerHTML = lyricsp.innerHTML.replace(/\n/g, "<br>");
        lyricsSection.id = "lyrics";


        // if (document.getElementById("lyrics")) {
        //     document.getElementById("lyrics").remove();
        // }
        lyricsSection.appendChild(artisth2);
        lyricsSection.appendChild(titleh2);
        lyricsSection.appendChild(lyricsp);
    



}

