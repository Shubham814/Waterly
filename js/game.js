class Game {
    constructor(){

    }
    start(){
        form = new Form();
        form.display();
    }
    play(){
        gameState = 1;
        form.hide();

        home = new Home();
        home.display();
    }
}