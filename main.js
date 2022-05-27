
let li = "";
let texts;
let max_chars = 25;
let uppercase;
let lowercase;
let splt;
let pushs;

const btn = document.getElementById('btn');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const spil = document.getElementById('split');
const push = document.getElementById('push');


btn.addEventListener('click', Yaz);
upper.addEventListener('click', Upper);
lower.addEventListener('click',Lower);
spil.addEventListener('click',Spil)
push.addEventListener('click',Push)

function Yaz() {
  texts = document.getElementById('text').value;
  if (!texts) {

    alert("lütfen boş bırakmayınız");

  }else if (texts.length > max_chars) {

  texts.value = texts.substr(0,max_chars);
  alert(max_chars + " karakterden uzun")
  document.getElementById('text').value = '';

    }else{
    li += `<li>${texts.charAt(0).toUpperCase() + texts.slice(1)}</li>`;
  
  document.querySelector('ul').innerHTML = li;
  document.getElementById('text').value = '';
        
    }

  }
  
  function Upper() {
    uppercase = document.getElementsByTagName('li');
    let ucase = '';
   
   for (let i = 0; i < uppercase.length; i++) {
     const element = uppercase[i];
    ucase += `<li>${element.innerText.toUpperCase().replace(/,/g, '')}</li>`;
   }
  
   document.querySelector('ul').innerHTML = ucase;
    
  }
  
  function Lower() {
      

    lowercase = document.getElementsByTagName('li');
    let lcase='';

    for (let i = 0; i < lowercase.length; i++) {
      const element = lowercase[i];
      lcase += `<li>${element.innerText.toLowerCase().replace(/,/g, '')}</li>`;
    }
    document.querySelector('ul').innerHTML = lcase;
  }
  
  function Spil() {
    splt = document.getElementsByTagName('li');
    let spl  = '';

    for (let i = 0; i < splt.length; i++) {
      const element = splt[i];
     
      spl += `<li>${element.innerText.split("")}</li>`;
    }
    document.querySelector('ul').innerHTML = spl;
    
  }

 function Push() {
   if (!texts) {

    alert("lütfen boş bırakmayınız");
   } else {

    let data = prompt("anything");
    pushs = document.getElementsByTagName('li');
    let chrs = "";

    for (let i = 0; i < pushs.length; i++) {
      const element = pushs[i];
      
      chrs += `<li>${element.innerText + data}</li>`
    
    }
   
    document.querySelector('ul').innerHTML = chrs;
   }
   //to be continued
  
    

   
 }



