function adicionarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        const tabela = document.getElementById('contatos-tbody');
        const novaLinha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        colunaNome.textContent = nome;

        const colunaTelefone = document.createElement('td');
        colunaTelefone.textContent = telefone;

        novaLinha.appendChild(colunaNome);
        novaLinha.appendChild(colunaTelefone);

        tabela.appendChild(novaLinha);

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    }
}
