$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
    
        }
    })
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz_-9vxy5uY_QIpJi0-2wLjViRDdn-4AD61nVJLGlvLgp2lsAe0qgeIi0mtmUsthqki/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message  Sent Successfully"
            setTimeout(function(){
                msg.innerHTML =  ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
});
