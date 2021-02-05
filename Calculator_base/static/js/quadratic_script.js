function quad() {
      
    a=parseFloat(document.form.A.value);
    
    b=parseFloat(document.form.B.value);
    
    c=parseFloat(document.form.C.value);
    
    x1= (-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)

    x2= (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)
    
    document.getElementById("ans-1").value = Number(x1).toFixed(3)

    document.getElementById("ans-2").value = Number(x2).toFixed(3)

    if (isNaN(document.getElementById("ans-1").value)) document.getElementById("ans-1").value="Imag.!";

    if (isNaN(document.getElementById("ans-2").value)) document.getElementById("ans-2").value="Imag.!";
    
    
}
    
    
    
    
    
    