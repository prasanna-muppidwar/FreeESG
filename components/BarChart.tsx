"use client"
import { useEffect, useRef } from "react";
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

function Examplee() {
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        // Register the necessary chart components
        Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

        const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;

        if (!canvas) {
            console.error("Canvas element not found");
            return;
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error("Canvas context not found");
            return;
        }

        // Destroy previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["E", "D", "C+", "C++", "B", "B+", "B++", "A", "A+", "A++"],
                datasets: [{
                    data: [0, 0, 5, 10, 20, 30, 35, 30, 25, 15, 5],
                    // label: "SCORE",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',   // Red
                        'rgba(255, 159, 64, 0.5)',   // Orange
                        'rgba(255, 205, 86, 0.5)',   // Yellow
                        'rgba(75, 192, 192, 0.5)',   // Green
                        'rgba(54, 162, 235, 0.5)',   // Blue
                        'rgba(153, 102, 255, 0.5)',  // Purple
                        'rgba(255, 159, 64, 0.5)',   // Orange
                        'rgba(255, 99, 132, 0.5)',   // Red
                        'rgba(75, 192, 192, 0.5)',   // Green
                        'rgba(54, 162, 235, 0.5)'    // Blue
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',    // Red
                        'rgb(255, 159, 64)',    // Orange
                        'rgb(255, 205, 86)',    // Yellow
                        'rgb(75, 192, 192)',    // Green
                        'rgb(54, 162, 235)',    // Blue
                        'rgb(153, 102, 255)',   // Purple
                        'rgb(255, 159, 64)',    // Orange
                        'rgb(255, 99, 132)',    // Red
                        'rgb(75, 192, 192)',    // Green
                        'rgb(54, 162, 235)'     // Blue
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false   // Hide the legend
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Cleanup function to destroy the chart on unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            {/* Bar chart */}
            <h1 className="w-[250px] mx-auto mt-10 text-xl font-semibold capitalize">ESG Rating Distribution</h1>
            <div className="w-[1100px] h-[80vh] flex mx-auto my-auto mt-4">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    );
}

export default Examplee;
