//alert("loading");
function addNewWEField(){
    //console.log("Adding new field");

    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")
    
    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    //console.log("Adding new field");

    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("acadQuaField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here')
    
    let aqOb=document.getElementById("aq");
    let acadQuaAddButtonOb = document.getElementById("acadQuaAddButton");

    aqOb.insertBefore(newNode, acadQuaAddButton);
}

//Generating CV
function GenerateCV(){
    //console.log("Generating CV");
    
    //name-1
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //Name -2 
    document.getElementById("nameT2").innerHTML=nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //Address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //Linkedin
    document.getElementById("lnT").innerHTML = document.getElementById("lnField").value;

    //Github
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;

    //Twitter
    document.getElementById("twittterT").innerHTML = document.getElementById("twitterField").value;

    //Intsagram
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    
    //Work Experience
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str=str+ `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //aq
    let aqs=document.getElementsByClassName("acadQuaField");
    let str1= "";

    for(let e of aqs){
        str1+= `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    

    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //image to template 
    reader.onloadend = function(){
        document.getElementById("imgT").src=reader.result;
    }

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

//print CV
function printCV(){
    window.print();
}