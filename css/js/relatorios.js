// Espera a página carregar
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("graficoFeiras").getContext("2d");
  
    const meuGrafico = new Chart(ctx, {
      type: "bar", // Tipo do gráfico: barra
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai"], // Meses como exemplo
        datasets: [{
          label: "Feiras Realizadas",
          data: [5, 8, 4, 10, 7], // Dados fictícios
          backgroundColor: "#003366",
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            text: "Relatório de Feiras por Mês"
          }
        }
      }
    });
  });
  