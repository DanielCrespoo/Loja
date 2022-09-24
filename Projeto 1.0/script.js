let tempo = 3000,
    currentImageIndex = 0,
    imagens = document.querySelectorAll("#slider img");
    max = imagens.length;


    function nextImage(){

    

        imagens[currentImageIndex].classList.remove("selected")

        currentImageIndex++

        if(currentImageIndex >= max)
            currentImageIndex = 0

        imagens[currentImageIndex].classList.add("selected")

    }


    function começar(){
        setInterval(() => {
            nextImage()
        }, tempo)
        // troca de imagem
        
    }

    window.addEventListener("load", começar)

