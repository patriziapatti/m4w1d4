//document.addEventListener("DOMContentLoaded", () => {
    function search() {
        let artist= document.getElementById("searchField").value
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+artist)
    .then(response =>{
        return response.json()
    })
    .then(pippo=>{
        //console.log(pippo["data"])//array di pippo
        document.getElementById("searchResults").style.display="block"
        let sezione = document.querySelector("#artistSection")
        let contenitoreArtista = document.querySelector("#nomeArt")
        contenitoreArtista.innerHTML = artist.toUpperCase()
        sezione.innerHTML=""
        pippo["data"].forEach(element => {
           // gigio.innerHTML += <div>element.album.title</div>
            document.getElementById("artist").classList.remove("d-none")
            let card = document.createElement("div")
            card.classList.add("corpoCard")
            let titoloAlbum = document.createElement("p")
            titoloAlbum.innerHTML = element.album.title
            let titoloCanzone =document.createElement("h5")
            titoloCanzone.innerHTML= element.title_short
            let durata = document.createElement("p")
            durata.innerHTML = element.duration + " secondi"
            let immagine = document.createElement("img")
            immagine.src = element.album.cover_big
            immagine.alt = element.title_short
            card.appendChild(immagine)
            card.appendChild(titoloCanzone)
            card.appendChild(titoloAlbum)
            card.appendChild(durata)
            sezione.appendChild(card)

            


        });
    })

}
