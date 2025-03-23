function renderGraph(data) {

    // Destroy existing chart if it exists to prevent memory leaks
    let existingChart = Chart.getChart("htmxdata")
    if (existingChart) {
      existingChart.destroy()
    }

    const ctx = document.getElementById('htmxdata').getContext('2d')

    const htmxdata = new Chart(ctx, {
      type: data.type, //e.g., 'bar', 'line', 'pie'
        data: {
            labels: data.labels, // e.g., ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
            datasets: [{
                label: data.label, // e.g., '# of Votes'
                data: data.values,  //e.g., [12, 19, 3, 5, 2, 3]
                backgroundColor: data.backgroundColor, //e.g., 'rgba(255, 99, 132, 0.2)'
                borderColor: data.borderColor, //e.g., 'rgba(255, 99, 132, 1)'
                borderWidth: 1
            }]
        },
        options: { // Add any chart options you need here
          animations: {
            x: false
          },
          scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

}
