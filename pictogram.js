document.addEventListener("DOMContentLoaded", function() {
    const padding = 5;
    const numCols = 11; // Fixed number of columns

    const colors = {
        pink: "#F5A0C7",
        blue: "#A3D8F8",
        yellow: "#F7E696"
    };

    // Data for the pictogram
    const data = [
        { category: "NR", count: 87, color: colors.yellow },
        { category: "male", count: 43, color: colors.blue },
        { category: "female", count: 12, color: colors.pink }
    ];

    // Create SVG element
    const svg = d3.select("#pictogram")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%");

    // Function to draw icons with animation
    const drawIcons = () => {
        const containerWidth = parseInt(d3.select("#pictogram").style("width"));
        const iconSize = (containerWidth - padding * (numCols - 1)) / numCols; // Calculate icon size dynamically
        const totalIcons = data.reduce((sum, d) => sum + d.count, 0);
        const numRows = Math.ceil(totalIcons / numCols);

        svg.attr("height", numRows * (iconSize + padding));

        let x = 0;
        let y = 0;
        let delay = 0;

        data.forEach(d => {
            for (let i = 0; i < d.count; i++) {
                if (x >= numCols) {
                    x = 0;
                    y++;
                }

                svg.append("circle")
                    .attr("cx", x * (iconSize + padding) + iconSize / 2)
                    .attr("cy", y * (iconSize + padding) + iconSize / 2)
                    .attr("r", 0) // Start with radius 0
                    .attr("fill", d.color)
                    .transition()
                    .duration(500) // Animation duration
                    .delay(delay) // Delay for each icon
                    .attr("r", iconSize / 2); // Final radius

                x++;
                delay += 20; // Increase delay for next icon
            }
        });
    }

    // Initial draw
    drawIcons();

    // Redraw on window resize
    window.addEventListener("resize", () => {
        svg.selectAll("*").remove(); // Clear existing icons
        drawIcons(); // Redraw icons
    });
});
