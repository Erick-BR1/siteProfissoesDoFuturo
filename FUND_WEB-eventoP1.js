const nome = "Erick Rodrigues da Silva";
const cidadeCurso = "\nSertãozinho, SP/ Análise e Desenvolvimento de Sistemas - Mackenzie\n";
const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const data = new Date();

let horas = data.getHours();
let dia = data.getDay();
let nomeDia = diaSemana[dia];

if (horas >= 0 && horas < 12) {
    alert(nome + cidadeCurso + 'Bom dia! Hoje é ' + nomeDia);
} else if (horas >= 12 && horas < 18) {
    alert(nome + cidadeCurso + 'Boa tarde! Hoje é ' + nomeDia);
} else {
    alert(nome + cidadeCurso + 'Boa noite! Hoje é ' + nomeDia);
}
