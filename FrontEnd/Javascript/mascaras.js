function aplicarMascara(input) {
    // Remove todos os caracteres que não são dígitos
    var valor = input.value.replace(/\D/g, '');

    // Aplica a máscara (99) 99999-9999
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');

    // Atualiza o valor no input
    input.value = valor;
}