document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM totalmente carregado");

  document.querySelectorAll(".d-block.mx-auto").forEach(img => {
    img.addEventListener('click', () => {
      const id = img.getAttribute('data-id');
      console.log("Clicou no ID:", id);
      window.location.href = `detalhes.html?id=${id}`;
    });
  });
});