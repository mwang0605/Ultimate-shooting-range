window.onload = (event) => {
let iframe = document.getElementById("urmumgay")   
    let variable = iframe.contentWindow.document.getElementsByClassName("console");

    for (let i = 0; i < variable.length; i++) { 
        variable[i].style.display='none'
    }

    console.log('page is fully loaded');
    console.log(variable)
};


