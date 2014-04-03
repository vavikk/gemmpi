var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('bird', 'fbjs/assets/bird.png');  
        this.game.load.image('pipe', 'fbjs/assets/pipe.png');  
        this.game.load.audio('jump', 'fbjs/assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};