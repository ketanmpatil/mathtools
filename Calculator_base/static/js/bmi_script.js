function bmi_index(){
    weight = parseFloat(document.getElementById('weight').value)
    height  = (parseFloat(document.getElementById('feet').value)/3.28)
    
    if (parseFloat(document.getElementById('weight').value) < 0){
        document.getElementById('index').value = 'Invalid'
        document.getElementById('status').value = 'Invalid'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#E60000";
        return;
    }else if ((parseFloat(document.getElementById('feet').value)) < 0 || (parseFloat(document.getElementById('feet').value)) < 0){
        document.getElementById('index').value = 'Invalid'
        document.getElementById('status').value = 'Invalid'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#E60000";
        return;
    }
    else{
        index =  Number(weight/(height*height)).toFixed(3)
        document.getElementById('index').value = index
        if (index < 18.6){
            document.getElementById('status').value = 'Underweight'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#E60000";
        }
        if (index > 18.6 && index < 26){
            document.getElementById('status').value = 'Normal'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#4CBB17";
        }
        if (index > 25 && index < 31){
            document.getElementById('status').value = 'Overweight'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#FF7800";
        }
        if (index > 30){
            document.getElementById('status').value = 'Obese'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#E60000";
        }
        if(isNaN(document.getElementById('index').value)){ 
            document.getElementById('index').value = 'Invalid'
            document.getElementById('status').value = 'Invalid'
            var el = document.getElementById('signal');
            el.style.backgroundColor = "#E60000";
        }
    }
    
    
}