![Logo](/Imagenes/LogoProvisional.png)

Vídeo demostración: https://www.youtube.com/watch?v=H6M2r9LwB78

# Índice
#### 1. Autores.
#### 2. Descripción del Juego.
#### 3. Categoría.
#### 4. Mecánicas.
#### 5. Controles.
#### 6. Personajes.
#### 7. Escenarios.
#### 8. Armas.
#### 9. Objetos.
#### 10. Matchmaking.
#### 11. Navegación de Pantallas.
#### 12. Diagrama de Clases.
#### 13. Protocolo WebSockets.
#### 14. Cómo instalar.

## 1. Autores:

**Nombre**: Mario Aguilar de los Santos. <br>
**Nickname**: McGuila20. <br><br>
**Nombre**: Enrique Chacón Horcajo. <br>
**Nickname**: EnriqueCh97. <br><br>
**Nombre**: David Delgado Álvarez. <br>
**Nickname**: FrozenBear98.

![Logoestudio](/Imagenes/logo_estudio.png)

## 2. Descripción del juego:
Last Escape es un videojuego online de escape y supervivencia en 2D con vista cenital para 2 hasta 4 jugadores. El objetivo principal del juego será salir de una determinada zona utilizando el escenario y diversos objetos del mapa. Tiene un carácter competitivo, por tanto, los jugadores se enfrentarán entre ellos para lograr escapar los primeros, pudiéndose eliminar unos a otros, pero habrá reapariciones. Las partidas tendrán una duración aproximada de 10 a 15 minutos.

## 3. Categoría:
Es un juego de supervivencia y escape y mecánicas de shooter, con características parecidas a juegos como Dead by Daylight o Frozen Synapse.

## 4. Mecánicas:
  * A cada jugador se le asignará uno de los cuatro personajes disponibles y competirán en un modo todos contra todos, con un número de     jugadores de 2 a 4.  
  * Los jugadores aparecen en un escenario(escenario estándar: edificio) por el que pueden moverse libremente en cualquier dirección.
  * Los jugadores pueden equiparse con armas que encuentren repartidas por el escenario.
  * El modo de ataque básico será pelea cuerpo a cuerpo utilizando un cuchillo que llevaremos desde el principio de la partida.
  * Cuando se equipen armas podrá usarlas para matar al resto de jugadores. Se podrá cambiar de arma y cambiar al modo cuerpo a cuerpo cuando el jugador quiera.
  * Además de armas, el jugador podrá ir recolectando objetos que encuentre a su paso, que le ayudarán a desbloquear ciertas zonas o para interactuar con otros objetos y resolver puzzles.
  * El jugador podrá interaccionar con puertas, objetos...
  * El jugador puede moverse andando a una velocidad normal y también podrá correr.
  * El campo de visión del jugador abarcará el alcance de una pequeña linterna que llevará desde el principio. Podrá aumentar el tamaño de dicho campo encontrando pilas o baterías repartidas por el escenario, este aumento será temportal, dependiendo de la duración de las mismas.
  * La linterna no se podrá apagar, por tanto el resto de jugadores te verán si te acercas a ellos en cualquier dirección.
  * Cualquier disparo realizado se escuchará en todo el escenario, y se informará al jugador del lugar del disparo mediante una notificación visual.
  * Ganará el jugador que logre escapar primero del lugar.

Cada partida se desarrolla en 3 por así decirlo fases, que marcan el objetivo a conseguir para escapar:
  * **1ª Fase:** Cuando comienza la partida lo primero que deberán hacer los jugadores es buscar por todo el mapa unos fusibles que permitirán arreglar el generador eléctrico de emergencia, estos fusibles se pueden encontrar desperdigados en las distintas habitaciones del mapa.
  
  * **2ª Fase:** Tras arreglar la electricidad, se activarán distintos mecanismos con los que los jugadores pueden interactuar, y lo que es más importante, se desbloqueará la sala de control del edificio, que permite a los jugadores obtener la tarjeta de salida. Para obtener esta tarjeta, tendrán que buscar las identificaciones que se encuentran repartidas por las habitaciones, solo una es la correcta, y usarlas en la sala de control para saber si han acertado. Tras esto obtendran una tarjeta que les permitirá abandonar el edifico.
  
  * **3ª Fase:** Con la tarjeta ya en sus manos, los jugadores podrán abandonar el edificio por una de las dos puertas de salida. Cuando se llega a esta fase, una alarma alertará al resto de los jugadores que alguien ya ha conseguido la tarjeta, lo que les permitirá acabar con él para evitar su escape. El jugador que muera con la tarjeta no la perderá pero tiene que saber que los jugadores adquirirán la tarjeta de identificación para obtener así sus propias tarjetas. Cuando un jugador consigue escapar gana la partida.

## 5. Controles:

![controles](/Imagenes/controles.png)

## 6. Personajes:

Cuando los jugadores se conecten a la partida se les signará aleatoriamente uno de los cuatro personajes disponibles. La única diferencia entre los personajes es visual, ninguno tendrá ventaja sobre los demás, ni habilidades específicas, ya que esto rompería el equilibrio del juego. Visualmente se sigue una estetíca minimalista con animaciones sencillas pero claras.
![personajes_1](/Imagenes/Pjs.png)

## 7. Escenarios:

Para cada partida se elegirá un escenario al azar y además los objetos se distribuirán de forma también aleatoria por el escenario, evitando así que las partidas se hagan repetitivas, ya que no puede haber dos partidas iguales. 

Los escenarios con los que contará el juego son: Edificio de oficinas, Cárcel, Hospital.

![Escenario](/Imagenes/EscenarioEdificio.png)

## 8. Armas:

Al comienzo de la partida los jugadores solo podrán combatir contra otros jugadores usando el cuchillo que tienen por defecto. Podrán encontrar distribuidas por el escenario diferentes armas para mejorar sus ataques.
  
* **Pistola:** es el arma más básica, dispara lento y hace un daño normal.
* **Subfusil:** este arma dispara mas balas por segundo pero su daño es muy reducido.
* **Fusil:** dispara un poco más rapido que la pistola y hace más daño.
* **Ballesta:** este arma mata de un disparo pero el tiempo entre disparos es muy elevado.

![armas](/Imagenes/Armas.png)

## 9. Objetos:

Los objetos se encontraran distribuidos por todo el mapa, tanto en el suelo de las habitaciones, como en las cajoneras que se encuentran repartidas por las habitaciones.

* **Fusibles:** necesarios para arreglar el generador. Serán necesarios 4 fusibles para hacer que funcione. Cualquier jugador puede llevar fusibles hasta el generador.
* **Tarjetas de Identificación:** habrá un total de 6 tarjetas de diferentes colores, y solo una será la correcta. Los jugadores deben ir probandolas en la sala de control para obtener la tarjeta de salida.
* **Tarjeta de Salida:** tarjeta que recibimos cuando introducimos la tarjeta de identificación correcta. Con esta tarjeta de salida podemos abrir las puertas de salida y ganar la partida.
* **Pilas:** aumentan el campo de visión de la linterna por un tiempo limitado.
* **Medicinas y Botiquines:** restauran la salud de nuestro personaje. El botiquin restaura la vida completamente y las medicinas solo una parte de esta.

![objetos](/Imagenes/Objetos.png)

## 10. Matchmaking:

El sistema de emparejamiento de Last Escape dependerá de las victorias de cada jugador, es decir, de las veces que han escapado en las últimas partidas que haya jugado. Por ejemplo a un jugador que en las últimas 5 partidas lleve 4 o 5 escapes se le meterá en un partida con otro jugador que lleve el mismo número de escapes. Esto ocurrirá de la misma manera con jugadores con 0,1,2... escapes.

Además también se tendrá en cuenta el tiempo que han tardado en escapar. De este modo se harán subgrupos dentro de los jugadores con el mismo número de victorias dependiendo del tiempo empleado. Así juntamos a jugadores que ganan rápido debido a su conocimiento pleno del juego y los separamos de los jugadores que ganan debido a su habilidad y que a lo mejor tardan un poco más debido a que no conocen los lugares donde se sitúan objetos importantes del juego o las puertas de salida, pero sobreviven por su dominio de la puntería o la estrategia.

## 11. Navegación de Pantallas:

![NavegacionPantallas](/Imagenes/navegación_pantallas.png)
![ExplicacionPantallas1](/Imagenes/explicación_pantallas_1.png)
![ExplicacionPantallas2](/Imagenes/explicación_pantallas_2.png)

## 12. Diagrama de Clases:

![DiagramaClases](/Imagenes/diagrama_clases2.png)

## 13. Protocolo WebSockets:

Para realizar mensajes entre los clientes y el servidor mediante WebSockets, se ha usado el siguiente protocolo. Se ha usado una cadena en formato JSON que contiene un campo llamado "metodo" que almacena el tipo de mensaje que es. El servidor y los clientes leen primero este campo y actúan en consecuencia.

## 14. Cómo instalar:

Para poder ejecutar el servidor se debe importar como proyecto en Spring Tool Suite 4.0. Después ejecutar como aplicación spring boot.
Se debe tener instalado JRE 1.8.

Por último, se debe modificar el archivo application.properties cambiando la IP a tu IP local y el puerto a uno de tu elección.
