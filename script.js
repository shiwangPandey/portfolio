console.log("Script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{

       
                document.querySelector('.cross').style.display = 'inline'
        },300);
    }
})
function myfunc(event) {
    event.preventDefault();

    var clientname = document.getElementById("clientname").value;
    var clientmail = document.getElementById("clientmail").value;
    var clientphone = document.getElementById("clientphone").value;
    var clientenquiry = document.getElementById("clientenquiry").value;
    
    localStorage.setItem('Name', clientname);
    localStorage.setItem('Email', clientmail );
    localStorage.setItem('Phone No.', clientphone );
    localStorage.setItem('Enquiry', clientenquiry);

}

