
//getting Doms i need 

const N = document.getElementById("N");
const Antilog = document.getElementById("Antilog");
const Ans = document.getElementById("ans");


let findlog1 = () => {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if((isNaN(num1))||(isNaN(num2))){
        document.getElementById("empty").innerHTML = "Empty Fields Dont Have Logs!👋🏻"
    }
    else{
        document.getElementById("empty").innerHTML =''
    }

    let ln1 = Math.log10(num1).toFixed(4);
    let ln2 = Math.log10(num2).toFixed(4);


    let logofnum1 = document.getElementById("logofnum1").innerHTML = ln1;
    let logofnum2 = document.getElementById("logofnum2").innerHTML = ln2;

    const selected = document.getElementById("select");

    let n;
    if(  selected.options[selected.selectedIndex].text ==="÷"){
         n = ( parseFloat(ln1)- parseFloat(ln2));
    }
    else{
         n = ( parseFloat(ln1) + parseFloat(ln2));
    }

n =n.toFixed(4)

//   n =   n.slice(0, -1)+ "";

    N.innerHTML = n;
    Antilog.innerHTML = `(${n})`;
   

    // ans by finding antilog by pow method 
    // let ans = Math.pow(10, n);
    let ans;
    if(selected.options[selected.selectedIndex].text ==="÷"){
        ans = (num1/num2);
    }
    else{
        ans = num1*num2;
    }

    
   Ans.innerHTML = ans.toFixed(4);

}

document.getElementById("check").addEventListener("click", findlog1);

