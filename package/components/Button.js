import btnStye from "./style.js"

class Button{

   

constructor(name, color, icon , width, height, borderRadius,className,effizy,bullets){
    this.name = name
    this.color = color
    this.icon = icon
    this.width = width
    this.height = height
    this.radius = borderRadius
    this.className = className
    this.effizy = effizy


    


    // not for call
    this.state = 0
    this.init_click = bullets



}


setBg(element){
  

    element.style.background = this.color

    


    element.style.color = "white"
    element.textContent = this.name 
    element.style.backgroundImage =  `url("${this.icon}")`
    element.style.backgroundPosition = "center"
    element.style.backgroundSize = "cover"
    element.style.backgroundSize = "45px"
    element.style.backgroundRepeat = "no-repeat"
    element.style.backgroundSize = Math.round((this.width/this.height)*(this.width * 0.2)).toString() + "px"
    element.style.borderRadius = this.radius + "px"

    

    element.style.width =  this.width.toString() + "px"
    element.style.height = this.height.toString() + "px"
    this.clicks(element)
   


   
  
}


countClicks(element){

element.addEventListener('click',()=>{

    element.querySelector('.clicks').textContent = (((--this.init_click)).toFixed(0)).toString()
    if(this.init_click.toFixed(0) == 0){

        element.disabled = true
        element.style.opacity ="0.5"
    }
    
  
})

}


setEffizy(element,visibility){


        if(this.effizy){
            let sty = document.createElement('div')
            element.append(sty)    

            sty.style.position = "absolute"
            sty.style.top = "0"
           
        
            sty.className = "effizy"
            sty.style.background = "red"
            sty.style.width = 10 + "%"
            sty.style.height = "100%"
            sty.style.opacity = "0.9"
            sty.style.marginLeft = "-3px"
            sty.style.borderRadius = `${this.radius}px 0px 0px ${this.radius}px`
            
       
            
                 

        
        }
    

}


clicks(element){

    let window = document.createElement('div')
    window.className = "clicks"
    
    window.style.background = "white"
    window.style.position = "relative"

    window.style.width = "15%"
    window.style.height = "22%"
    window.style.borderRadius = "100%"
    window.style.marginLeft = "87%"
    window.style.marginTop = "50%"

    window.style.textAlign = "center"
    window.style.color = "black"

    window.style.fontSize = "0.5rem"
    window.style.lineHeight = "15px"
    
    
    element.append(window)

   


}

toString(){
    let variableValues = this.name + " " + this.color + " a btn fx created by me"
    return variableValues
}



create(){

    let button = document.createElement('button') 
    button.className = this.className
    button.style.position = "relative"
    this.setBg(button)
    this.countClicks(button)
    console.log(this.className)

    


  
   

    button.addEventListener('mouseenter',(e)=>{
      
             
        this.setBg(e.target)    
        this.setEffizy(e.target,true)

       
 

      
           

      
    })
          

    button.addEventListener('mouseout',(e)=>{     

 
        this.setBg(e.target)   
       
       
      

     
        
                 
                })
            
                
                
                return button

    }




}



export {Button}
