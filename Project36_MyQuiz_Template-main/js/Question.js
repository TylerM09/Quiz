class Question {

  constructor() {
    this.title = createElement('h1')
    this.input = createInput("Enter Your Name Here....");
    this.Q1 = createElement('h4')
    this.Q2 = createElement('h4')
    this.Q3 = createElement('h4')
    this.Q4 = createElement('h4') 
    this.message = createElement("h2")
  
  }
    

   //Create a input box to enter the number

  


   setElementsPosition(){
    this.button = createButton('Submit');
    this.button.position(290, 300);
    this.input.position(150, 230);
    this.title.position(120, 50)
    this.Q1.position(200, 50)
    this.Q2.position(200, 75)
    this.Q3.position(200, 100)
    this.Q4.position(200, 125)
   }
     
  

    setElementsStyle(){

this.title.class("gameTitle")
this.input.class("customInput")
this.button.class("customButton")
this.message.class("greeting")


    }




    

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    this.Q1.hide()
    this.Q2.hide()
    this.Q3.hide()
    this.Q4.hide()
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

this.Q1.html()
this.Q1.position()
this.Q2.html()
this.Q3.html()
this.Q4.html()




  




  
   

  


  }

}
