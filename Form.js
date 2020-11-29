class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h2');

    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("First Responders");
      this.title.position(displayWidth/2 - 70, 0);
  
      this.input.position(displayWidth/2 - 70 , displayHeight/2 - 80);
      this.button.position(displayWidth/2, displayHeight/2);

  
      this.button.mousePressed(()=>{
        gameState = 2;
        this.input.hide();
        this.button.hide();
        playerName = this.input.value();
        username.child(playerName).set({'ID': 0})
      });
    }

    async start(){
        if(gameState === 3){
            form = new Form();
            form.display();
            player.visible = false;
            enemyArray[0].visible = false;
        }
    }
}
  