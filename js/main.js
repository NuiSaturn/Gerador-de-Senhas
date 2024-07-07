function atualizarValor(valor) {
    document.getElementById('valorTamanho').textContent = valor;
}

function gerarSenha() {
    const tamanho = document.getElementById('tamanho').value;
    const incluirMaiusculas = document.getElementById('letrasMaiusculas').checked;
    const incluirMinusculas = document.getElementById('letrasMinusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirSimbolos = document.getElementById('simbolos').checked;
    const nivelSeguranca = document.querySelector('input[name="radio"]:checked').value;

    let charset = "";
    let senha = "";

    if (incluirMaiusculas) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirMinusculas) charset += "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) charset += "0123456789";
    if (incluirSimbolos) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (charset === "") {
        alert("Selecione pelo menos uma opção de caractere.");
        return;
    }

    for (let i = 0, n = charset.length; i < tamanho; ++i) {
        senha += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById('result').value = senha;
}

function copiarSenha() {
    const resultInput = document.getElementById('result');
    resultInput.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
}
