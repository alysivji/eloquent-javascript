const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

function getHeaders(item) {
  return Object.keys(item);
}
headers = getHeaders(MOUNTAINS[0])

table = document.createElement("table")

row = document.createElement("tr");
for (col of headers) {
  title = document.createElement("th");
  title.innerHTML = col;
  row.appendChild(title);
}
table.appendChild(row);

for (mountain of MOUNTAINS) {
  row = document.createElement("tr");
  for (col of headers) {
    data = document.createElement("td");
    value = mountain[col];
    data.innerHTML = value;
    if (Number.isInteger(value)) {
      data.style.textAlign = "right";
    }

    row.appendChild(data);
  }
  table.appendChild(row)
}

mountains = document.getElementById("mountains")
mountains.appendChild(table)
