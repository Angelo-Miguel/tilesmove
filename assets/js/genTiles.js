let tileSize = 10;
let table = document.getElementById('grid');
let tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let i = 0; i < tileSize; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let j = 0; j < tileSize; j++) {
        let td = document.createElement('td');
        td.id = i * tileSize + j + 1;
        td.className = 'teste';
        td.innerText = i * tileSize + j + 1;
        tr.appendChild(td);
    }
}

document.getElementById("1").classList.add("selected");

for (var i = 0; i < tileSize; i++) {
    tiles[i] = [];
    for (var j = 0; j < tileSize; j++) {
        tiles[i][j] = i * tileSize + j + 1;
    }
}

