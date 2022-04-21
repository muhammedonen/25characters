
let li = "";
let texts;
let max_chars = 25;
let uppercase;
let lowercase;
let splt;
let chars;

const btn = document.getElementById('btn');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const spil = document.getElementById('split');
const char = document.getElementById('char');


btn.addEventListener('click', Yaz);
upper.addEventListener('click', Upper);
lower.addEventListener('click',Lower);
spil.addEventListener('click',Spil)
char.addEventListener('click',Char)

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

 function Char() {
   chars = document.getElementsByTagName('li');
    let chrs = "";

    for (let i = 0; i < chars.length; i++) {
      const element = chars[i];
      
      chrs += `<li>${element.innerText.charCodeAt(0)}</li>`
     //burada kaldık
    }
    
    document.querySelector('ul').innerHTML = chrs;
 }



