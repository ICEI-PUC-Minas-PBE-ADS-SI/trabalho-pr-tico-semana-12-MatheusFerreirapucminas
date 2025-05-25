function enviar() {

    const imagens = {
        1: "images/comedia.jpg",
        2: "images/acao.jpg",
        3: "images/terror.png",
        4: "images/documentario.jpg",
        5: "images/series.jpg",
        6: "images/romance.jpg",
        7: "images/infantil.png",
        8: "images/2comedia.jpg",
        9: "images/2acao.jpg",
        10: "images/2terror.jpg",
        11: "images/2documentario.jpg",
        12: "images/2series.jpg",
        13: "images/2romance.jpg",
        14: "images/2infantil.jpg",
    };

    const nomeSelect = document.getElementById('nome');
    const filmeId = nomeSelect.value;
    const filmeTitulo = nomeSelect.options[nomeSelect.selectedIndex].text;

    const classeSelect = document.getElementById('classe');
    const classificacao = classeSelect.options[classeSelect.selectedIndex].text;

    const imagem = imagens[filmeId];

    const dados = {
        titulo: filmeTitulo,
        clasificação: classificacao,
        foto: imagem
    };

    fetch("http://localhost:3000/favoritos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar dados.");
            }
            return response.json();
        })
        .then(data => {
            console.log("Enviado com sucesso:", data);
        })
        .catch(error => {
            console.error("Erro ao enviar:", error);
        });
}

function deleta(id) {
    fetch(`http://localhost:3000/favoritos/${id}`, {
        method: "DELETE"
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao deletar o filme.");
            }
            console.log("Filme deletado com sucesso.");
            location.reload();
        })
        .catch(error => {
            console.error("Erro ao deletar:", error);
        });
}

function put(id) {
    const imagens = {
        1: "images/comedia.jpg",
        2: "images/acao.jpg",
        3: "images/terror.png",
        4: "images/documentario.jpg",
        5: "images/series.jpg",
        6: "images/romance.jpg",
        7: "images/infantil.png",
        8: "images/2comedia.jpg",
        9: "images/2acao.jpg",
        10: "images/2terror.jpg",
        11: "images/2documentario.jpg",
        12: "images/2series.jpg",
        13: "images/2romance.jpg",
        14: "images/2infantil.jpg",
    };

    const nomeSelect = document.getElementById('nome');
    const filmeId = nomeSelect.value;
    const filmeTitulo = nomeSelect.options[nomeSelect.selectedIndex].text;

    const classeSelect = document.getElementById('classe');
    const classificacao = classeSelect.options[classeSelect.selectedIndex].text;

    const imagem = imagens[filmeId];

    const dadosAtualizados = {
        titulo: filmeTitulo,
        clasificação: classificacao,
        foto: imagem
    };

    fetch(`http://localhost:3000/favoritos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao atualizar o filme.");
            }
            return response.json();
        })
        .then(data => {
            console.log("Filme atualizado com sucesso:", data);
            location.reload();
        })
        .catch(error => {
            console.error("Erro ao atualizar:", error);
        });
}