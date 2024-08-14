/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([am5themes_Animated.new(root)]);

// Add series
// https://www.amcharts.com/docs/v5/charts/word-cloud/
var series = root.container.children.push(
  am5wc.WordCloud.new(root, {
    categoryField: "tag",
    valueField: "weight",
    maxFontSize: am5.percent(15),
  })
);

// Configure labels
series.labels.template.setAll({
  fontFamily: "Comfortaa",
});

setInterval(function () {
  am5.array.each(series.dataItems, function (dataItem) {
    var value = Math.random() * 65;
    value = value - Math.random() * value;
    dataItem.set("value", value);
    dataItem.set("valueWorking", value);
  });
}, 5000);

// Data from:
// https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
series.data.setAll([
  { tag: "Quantum", weight: 70 },
  { tag: "quantum-walk", weight: 64.96 },
  { tag: "algorithms", weight: 56.07 },
  { tag: "scrambling", weight: 48.24 },
  { tag: "complexity", weight: 47.08 },
  { tag: "simulations", weight: 35.35 },
  { tag: "data search", weight: 33.91 },
  { tag: "chaos", weight: 30.19 },
  { tag: "non-hermitian", weight: 27.86 },
  { tag: "Integrable", weight: 27.13 },
  { tag: "QC2", weight: 24.31 },
  { tag: "VQE", weight: 21.98 },
  { tag: "open system", weight: 21.01 },
  { tag: "non-local", weight: 10.75 },
  { tag: "circuits", weight: 9.55 },
  { tag: "error correction", weight: 8.32 },
  { tag: "many-body system", weight: 7.03 },
  { tag: "spin-chain", weight: 6.75 },
  { tag: "information theory", weight: 6.02 },
  { tag: "communication", weight: 5.61 },
  { tag: "optics", weight: 5.1 },
  { tag: "entanglement", weight: 5.07 },
  { tag: "time-crystals", weight: 4.66 },
  { tag: "OTOC", weight: 4.66 },
  { tag: "level-spacing", weight: 3.01 },
  { tag: "neutrino", weight: 2.8 },
  { tag: "operator", weight: 2.6 },
  { tag: "K-complexity", weight: 2.46 },
  { tag: "lindbladian", weight: 2.12 },
  { tag: "entropy", weight: 2.1 },
  { tag: "Black holes", weight: 1.88 },
  { tag: "Ads-CFT", weight: 1.74 },
  { tag: "fast scramblers", weight: 1.33 },
  { tag: "Holography", weight: 1.29 },
  { tag: "Qubit", weight: 0.97 },
  { tag: "PT symmetry", weight: 0.79 },
  { tag: "Quspin", weight: 0.65 },
  { tag: "Qiskit", weight: 0.56 },
  { tag: "Cellular automaton", weight: 0.53 },
]);
