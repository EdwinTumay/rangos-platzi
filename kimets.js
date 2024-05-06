class Personajes
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}
var imagenes = [];
imagenes["Nezuko"] = "nezuko.png";
imagenes["Tanjirou"] = "tanjirou.png";
imagenes["Zenitsu"] = "zenitsu.png";
imagenes["Inosuke"] = "inosuke.png";
imagenes["Muzan"] = "muzan.png";
imagenes["Daki"] = "daki.png";

var coleccion = [];
coleccion.push(new Personajes("Nezuko", 500, 90));
coleccion.push(new Personajes("Tanjirou", 350, 90));
coleccion.push(new Personajes("Zenitsu", 300, 80));
coleccion.push(new Personajes("Inosuke", 340, 80));
coleccion.push(new Personajes("Muzan", 600, 100));
coleccion.push(new Personajes("Daki", 450, 70));

for(var freddito of coleccion)
{
  freddito.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}