var tiles = [];
var l = 0;
var c = 0;
var x = 0;
var y = 0;
var actionTrigger = 0;

document.addEventListener('keydown', (e) => {
   if ((e.key === 'w' || e.key === 'ArrowUp') && c > 0) c--, move();
   if ((e.key === 'a' || e.key === 'ArrowLeft') && l > 0) l--, move();
   if ((e.key === 's' || e.key === 'ArrowDown') && c < tileSize - 1) c++, move();
   if ((e.key === 'd' || e.key === 'ArrowRight') && l < tileSize - 1) l++, move();
   if (e.key === 'Enter') enter();
   function move() {
      document.getElementById("x").innerHTML = l;
      document.getElementById("y").innerHTML = c;
      document.getElementById(tiles[c][l]).classList.add("selected");
      if (actionTrigger == 1) {
         document.getElementById(tiles[y][x]).classList.remove("selected");
      } else {
         document.getElementById("1").classList.remove("selected");
         actionTrigger = 1;
      }
      x = l;
      y = c;
   }
   function enter() {
      var idTile = document.getElementById(tiles[c][l]).innerHTML;
      document.getElementById("enter").innerHTML = idTile;
   }
});


/* Continuar depois Adicionar click para o menu */
addEventListener("click",(e)=>{ 
   e.target.classList.add("selected");
   var idclick = e.target.id;
   tiles.forEach(tiles => {
      if (tiles == idclick) {
         console.log("teste");
      }
   });
});