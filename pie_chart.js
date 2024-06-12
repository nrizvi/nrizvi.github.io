document.addEventListener('DOMContentLoaded', function() {
            var canvas = document.getElementById('chart');
            if (canvas) {
                var ctx = canvas.getContext('2d');

                // Data for the inner pie chart (Medical, Social, Other)
                var innerData = {
                    labels: ['Medical', 'Social', 'Other'],
                    datasets: [{
                        data: [129, 9, 4],
                        backgroundColor: ['#F5A0C7', '#F7E696', '#A3D8F8']
                    }]
                };

                // Data for the outer pie chart (Treatment, Diagnosis, Other)
                var outerData = {
                    labels: ['Treatment', 'Diagnosis', 'Other'],
                    datasets: [{
                        data: [105, 17, 20],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }]
                };

                // Creating a combined data structure with two datasets for nested doughnut charts
                var data = {
                    labels: innerData.labels.concat(outerData.labels),
                    datasets: [
                        {
                            data: innerData.datasets[0].data.concat([0, 0, 0]), // Ensure the inner chart's data
                            backgroundColor: innerData.datasets[0].backgroundColor.concat(['#FFFFFF', '#FFFFFF', '#FFFFFF']) // Padding with white to separate inner and outer
                        },
                        {
                            data: [0, 0, 0].concat(outerData.datasets[0].data), // Ensure the outer chart's data
                            backgroundColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'].concat(outerData.datasets[0].backgroundColor) // Padding with white to separate inner and outer
                        }
                    ]
                };

                // Options for the chart
                var options = {
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: {
                        position: 'top',
                        labels: {
                            generateLabels: function(chart) {
                                var labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                                // Separate inner and outer labels
                                var innerLabels = labels.slice(0, 3);
                                var outerLabels = labels.slice(3);

                                // Create empty space as a separator
                                var separator = {
                                    text: '\u00A0\u00A0\u00A0', // Non-breaking spaces
                                    fillStyle: 'transparent',
                                    hidden: true,
                                    strokeStyle: 'transparent',
                                    lineCap: 'butt',
                                    lineDash: [],
                                    lineDashOffset: 0,
                                    lineJoin: 'miter',
                                    pointStyle: 'line',
                                    rotation: 0
                                };

                                return innerLabels.concat([separator]).concat(outerLabels);
                            }
                        }
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    cutoutPercentage: 50, // This makes the chart a doughnut chart with a cutout in the middle
                    plugins: {
                        datalabels: {
                            color: '#000',
                            display: function(context) {
                                return context.datasetIndex === 1 && context.dataIndex >= 3; // Only display labels for the outer dataset
                            },
                            formatter: function(value, context) {
                                if (value > 0) {
                                    return context.chart.data.labels[context.dataIndex];
                                } else {
                                    return '';
                                }
                            }
                        }
                    }
                };

                new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                    options: options,
                    plugins: [ChartDataLabels] // Register the plugin here
                });
            } else {
                console.error('Canvas element not found');
            }
        });