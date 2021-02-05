function insert(num){
    document.form.textview.value = document.form.textview.value+num
  } 
  
  function ac(){
    document.form.textarea.value =  ""
    document.form.textview.value =  ""
    
  }
  
  function del(){
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1)
  }
  
  function equal(){
    var exp = document.form.textview.value
    if (exp){
      document.form.textarea.value = eval((document.form.textview.value))
    }
    
    
  }