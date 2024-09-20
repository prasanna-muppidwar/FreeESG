"use client"
import { useEffect } from "react";
import { Chart, BubbleController, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(BubbleController, LinearScale, PointElement, Tooltip, Legend, annotationPlugin);

function Example() {
    useEffect(() => {
        const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;

        if (!canvas) {
            console.error("Canvas element with ID 'myChart' not found.");
            return;
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error("Canvas context '2d' not supported.");
            return;
        }

        const myChart = new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [{
                    data: [
                        { x: 2014, y: 54, r: 11 },
                    ],
                    label: "2014",
                    borderColor: "rgb(75, 192, 192 )",
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    borderWidth: 2,
                }, {
                    data: [
                        { x: 2020, y: 46, r: 20 },
                    ],
                    label: "2020",
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgba(255, 205, 86, 0.5)",
                    borderWidth: 2,
                }, {
                    data: [
                        { x: 2024, y: 60, r: 30 },
                    ],
                    label: "2024",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    borderWidth: 2,
                }]
            },
            options: {
                plugins: {
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                xMin: 2014,
                                xMax: 2020,
                                yMin: 54,
                                yMax: 46,
                                borderColor: 'rgba(75, 192, 192, 0.8)',
                                borderWidth: 2,
                                xScaleID: 'x',
                                yScaleID: 'y'
                            },
                            line2: {
                                type: 'line',
                                xMin: 2020,
                                xMax: 2024,
                                yMin: 46,
                                yMax: 60,
                                borderColor: 'rgba(255, 205, 86, 0.8)',
                                borderWidth: 2,
                                xScaleID: 'x',
                                yScaleID: 'y'
                            },
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: ''
                        }
                    },
                    y: {
                        min: 40,
                        max: 70,
                        title: {
                            display: true,
                            text: ''
                        }
                    }
                }
            },
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <>
            <h1 className="w-[200px] mx-auto mt-10 text-2xl font-semibold capitalize mb-0">ESG Score History</h1>
            <div className="w-[1100px] h-[90vh] flex mx-auto my-auto mt-4">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Example;
