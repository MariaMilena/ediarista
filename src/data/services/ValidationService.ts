export const ValidationService = {
    cep(cep = ''): boolean { // Função para validar o cep
        return cep.replace(/\D/g, '').length === 8; // Substituir tudo que não for numero por uma string vazia. O g pega a string inteira. E a comparação é pra ver se foram digitados todos os números
    }
}