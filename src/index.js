const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result ='';
    let arr=[];
    
    for(let i=0; i<expr.length; i=i+10){
      let part = expr.slice(i,i+10);
      arr.push(part);
      }
    
    for(let j=0;j<arr.length;j++){
      let p = arr[j];
      
      if(p=='**********'){
        result=result+' ';
        }
      else{
        let resultDec='';
        
      for(let n=0;n<p.length;n=n+2){
        let res = p.slice(n,n+2);
          if(res =='10'){
            resultDec = resultDec+'.';
            }
          if(res =='11') {
            resultDec = resultDec+'-';
            }
      }
        for(let key in MORSE_TABLE){
          if(resultDec == key){
          result = result+MORSE_TABLE[key];
                
              }
            }
          }
        }
      
  return result;
}

module.exports = {
    decode
}