function PrintAll(){
   var name= document.getElementById("firstname").value
    document.getElementById("first").innerHTML="this is your name mr "+name
    var last_name=document.getElementById("lastname").value
    document.getElementById("last").innerHTML="this is your last name"+last_name
    var dob=document.getElementById("dob").value
    document.getElementById("date").innerHTML="birth "+dob
    var address=document.getElementById("address").value
    document.getElementById("adress").innerHTML="address "+address
}
