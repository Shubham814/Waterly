class Home {
    constructor(){
        this.head = createElement('h1');
        this.firstName = createElement('h2');
        this.weight = createElement('h6');
        this.age = createElement('h6');
    }
    hide(){

    }
    display(){
        this.head.html("Waterly");
        this.head.position(width/2-100,50);
        this.head.style("font-family","cursive");

        this.firstName.html("Name : " + firstName + " " + lastName);
        this.firstName.position(50,height/4);
        this.firstName.style("font-family","cursive");





   
    }
}