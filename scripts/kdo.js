function swapImage() {
        // Récupère les éléments image par leur ID
        var image1 = document.getElementById("image1");
        var image2 = document.getElementById("image2");

        // Vérifie si image1 est affichée, puis alterne la visibilité
        if (image1.style.display === "none") {
            image1.style.display = "inline-block";
            image2.style.display = "none";
        } else {
            image1.style.display = "none";
            image2.style.display = "inline-block";
        }
    }