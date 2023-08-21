//PARA QUANDO ADICIONAR AS IMAGENS

function previewImages(event) {
  const previewContainer = document.getElementById("imagePreview");
  previewContainer.innerHTML = ""; // Limpa a visualização antes de atualizar

  const files = event.target.files;

  for (const file of files) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = document.createElement("img");
      image.src = e.target.result;
      image.classList.add("preview-image");
      previewContainer.appendChild(image);
    };

    reader.readAsDataURL(file);
  }
}



