LastEscape.resultsState = function(game) {

}

LastEscape.resultsState.prototype = {

    preload: function() {
        
    },

    create: function() {
        game.add.tileSprite(0, 0, 1280, 720, 'fondoDesenfocado');
        game.add.tileSprite(279, 120, 721, 479, 'resultados');
        cerrar = game.add.button(955, 125, 'cerrar', botonCerrar, this, 1, 0);
        
        game.jugador1 = undefined;
        game.jugador2 = undefined;
        game.jugador3 = undefined;
        game.jugador4 = undefined;
    },

    update: function() {

    }
}

function botonCerrar () {
	var msg = {metodo: "deletePlayers"};
	game.connection.send(JSON.stringify(msg));
    game.state.start('menuState');
}
