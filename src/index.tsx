import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { html, raw } from "hono/html";

import { Card } from "./components/Card";

const app = new Hono();

// The card
app.get("/card", async (c) => {
  return c.html(<Card />);
});

// The graph data
app.get("/graphdata", async (c) => {
  const numPoints = 6;
  const data = {
    label: "# of Votes",
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    values: Array.from(
      { length: numPoints },
      () => Math.floor(Math.random() * 15) + 5,
    ),
    type: "bar",
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
  };

  const json = JSON.stringify(data);

  return c.html(
    html`<script>
      renderGraph(${raw(json)});
    </script>`,
  );
});

// Serve static files
app.get("/graph.js", serveStatic({ path: "/assets/graph.js" }));
app.get("/", serveStatic({ path: "/assets/index.html" }));

export default {
  port: 3000,
  fetch: app.fetch,
};
