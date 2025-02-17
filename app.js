const inputel=document.getElementById('seachbtn')
    console.log(inputel)
    let uls=  document.getElementById('ulsss')
 const btn=document.getElementById('btns')
 console.log(btn)

 btn.addEventListener('click', addlists)

 function addlists(){

    if(inputel.value ===''){
      alert("write something in text")
    }
    else{
      let li=document.createElement('li')

      li.textContent=inputel.value


     uls.appendChild(li)

     let span=document.createElement('span')
     span.innerHTML="\u00d7";
     li.appendChild(span)
    inputel.value=''
    savedata()


    }



 
 };

 uls.addEventListener('click',(e)=>{
   
   console.log(e.target)
   console.log(e.target.parentElement)
   if(e.target.tagName == "LI"){
      e.target.classList.toggle("cheked") 
      savedata()
         
      }
    
   else if(e.target.tagName=="SPAN")
      {
         e.target.parentElement.remove();
         savedata()

   }
  
 },false)

 function savedata(){
   localStorage.setItem("data",uls.innerHTML)
 }
 function showdata(){
   uls.innerHTML=localStorage.getItem("data")

 }
 showdata()

let obj={
   name:"nithy",
   age:45
}
console.log(obj)
    
