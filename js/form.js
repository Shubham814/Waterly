class Form {
    constructor(){
        this.head = createElement('h1');
        this.firstName = createInput('').attribute("placeholder","         First Name");
        this.lastName = createInput('').attribute("placeholder","         Last Name");
        this.weight = createInput('').attribute("placeholder","       Weight (e.g. 38)");
        this.age = createInput('').attribute("placeholder","          Age (In years)");
        this.next = createButton('Next');
    }
    hide(){
        this.head.hide();
        this.firstName.hide();
        this.lastName.hide();
        this.weight.hide();
        this.age.hide();
        this.next.hide();
    }
    display(){
        this.head.html("Waterly");
        this.head.position(width/2-100,50);
        this.head.style("font-family","cursive");

        this.firstName.position(width/2-250,height/4);
        this.firstName.style("height","35px");
        this.firstName.style("font-family","cursive");

        this.lastName.position(width/2,height/4);
        this.lastName.style("height","35px");
        this.lastName.style("font-family","cursive");

        this.weight.position(width/2-250,height/2);
        this.weight.style("height","35px");
        this.weight.style("font-family","cursive");

        this.age.position(width/2,height/2);
        this.age.style("height","35px");
        this.age.style("font-family","cursive");

        this.next.position(width/2-90,height/2+100);
        this.next.style("height","35px");
        this.next.style("width","100px");
        this.next.style("font-family","cursive");

        this.next.mousePressed(()=>{
            gameState = 1;
            lastName = this.lastName.value();
            firstName = this.firstName.value();
            weight = this.weight.value();
            age = this.age.value();
        })
    }
     isInputNumber(evt){
        var ch = String.fromCharCode(evt.which);
        if(! (/[0-9]/.test(ch))){
          evt.preventDefault();
        }
      }
}