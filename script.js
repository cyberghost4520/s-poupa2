// Exibe uma mensagem de boas-vindas ao usuário quando a página é carregada
window.onload = function() {
    console.log("Bem-vindo à Dino Distribuidora Só Polpa!");
};

// Adiciona um evento de clique ao botão do WhatsApp
document.getElementById("whatsappButton").addEventListener("click", function() {
    alert("Você será redirecionado para o WhatsApp para fazer seu pedido.");
});
