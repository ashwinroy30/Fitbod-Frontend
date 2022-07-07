import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function PokemonStats(props) {
  return (
    <>
      <div>
        <Radar
          data={{
            labels: props.stats.map((stat) => stat.stat.name),
            datasets: [
              {
                data: props.stats.map((stat) => stat.base_stat),
                backgroundColor: "rgba(134, 197, 242, 0.8)",
                borderColor: "#115CB5",
                borderWidth: 2,
                pointStyle: "line",
              },
            ],
          }}
        />
      </div>
    </>
  );
}
