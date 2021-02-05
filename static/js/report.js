function reportAlert(){
    
    if ( document.getElementById('name').value != '' && document.getElementById('subject').value != '' && document.getElementById('description').value != ''  ){
        alert('Report Submited!')
    }
    else{
        alert('Please complete the form before submitting.')
    }
}