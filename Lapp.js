function vali ()
{
    var inputtag=document.getElementsByTagName("input")


    if(inputtag[0].value!="Sharan")
    {
        let x=document.getElementById("username")
        x.innerHTML="username is invalid"
        x.style.color="red"
        return false
    }

    else if(inputtag[1].value!="sharanappahbd@gmail.com")
    {
        let x=document.getElementById("email")
        x.innerHTML="email is invalid"
        x.style.color="red"
        return false
    }

    else if(inputtag[2].value!="Sharan@123")
    {
        let x=document.getElementById("password")
        x.innerHTML="Invalid password"
        x.style.color="red"
        return false
    }

    else if(inputtag[3].value!=inputtag[2].value)
    {
        let x=document.getElementById("conpasword")
        x.innerHTML="Invalid password"
        x.style.color="red"
        return false
    }
    
}

var s= document.getElementById('agree')

s.addEventListener('change',function()//attaches an event handler to the specified element.
{
    let register = document.getElementById("register");
    if(s.checked)
    {
        register.removeAttribute('disabled')//removes an attribute, and does not have a return value.
    }
    else{
        register.setAttribute('disabled','disabled')//sets a new value to an attribute
    }

})
