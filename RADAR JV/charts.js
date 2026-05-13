const analyticsCtx = document.getElementById('analyticsChart');

if (analyticsCtx) {

  new Chart(analyticsCtx, {

    type: 'line',

    data: {

      labels: [
        '08h',
        '09h',
        '10h',
        '11h',
        '12h',
        '13h',
        '14h'
      ],

      datasets: [{

        label: 'Corridas',

        data: [
          12,
          19,
          27,
          31,
          22,
          40,
          48
        ],

        borderColor: '#06b6d4',

        backgroundColor: 'rgba(6,182,212,0.2)',

        borderWidth: 3,

        tension: 0.4,

        fill: true,

        pointRadius: 4

      }]

    },

    options: {

      responsive: true,

      maintainAspectRatio: false,

      plugins: {

        legend: {

          labels: {

            color: 'white'

          }

        }

      },

      scales: {

        x: {

          ticks: {

            color: '#94a3b8'

          },

          grid: {

            color: 'rgba(255,255,255,0.05)'

          }

        },

        y: {

          ticks: {

            color: '#94a3b8'

          },

          grid: {

            color: 'rgba(255,255,255,0.05)'

          }

        }

      }

    }

  });

}