var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li'); // HTMLCollection

var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

getinput.addEventListener('keyup',filter);

function filter(){
    // console.log(this.value);
    
    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter)

    for(var x = 0; x < getli.length; x++){
        // console.log(getli[x].querySelector('a').textContent.toLowerCase());
        // console.log(getli[x].getElementsByTagName('a')[0].innerText.toLowerCase());

        var getavalue = getli[x].querySelector('a').textContent.toLowerCase();

        if(getavalue.indexOf(inputfilter) > -1){
            getli[x].style.display = "block";
        }else{
            getli[x].style.display = "none";
        }
    }
}

// Method 1

getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);

function sortingazm1(){
    var lis = [];

    for(var i = 0; i < getli.length; i++){
        // console.log(getli[i]);
        // console.log(getli[i].textContent);

        lis.push(getli[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();

    getul.innerHTML = "";

    azlis.forEach(function(azli){
        // console.log(azli);
        let newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = `javascript:void(0);`;
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        // console.log(newli);
        getul.appendChild(newli);
        
    });

}

function sortingzam1(){
    var lis = [];

    for(var i = 0; i < getli.length; i++){
        lis.push(getli[i].textContent);
    }

    var azlis = lis.sort().reverse();

    getul.innerHTML = "";

    azlis.forEach(function(azli){
        let newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = `javascript:void(0);`;
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        getul.appendChild(newli); 
    });

}

// Method 2

getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);

function sortingazm2(){

    var shouldswitch = true;
    var switching = true;

    do{

        switching = false;

        var i = 0;

        for(i; i < getli.length-1 ; i++){

            shouldswitch = false;

            if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }

        }

        if(shouldswitch){
            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);

            switching = true;
        }

    }while(switching);

}

function sortingzam2(){

    var shouldswitch = true;
    var switching = true;

    do{

        switching = false;

        var i = 0;

        for(i; i < getli.length-1 ; i++){

            shouldswitch = false;

            if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }

        }

        if(shouldswitch){
            getli[i].parentNode.insertBefore(getli[i+1],getli[i]);

            switching = true;
        }

    }while(switching);
    
}

// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());


            // Ag Ag                            Mg Mg
// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
//     console.log("true");
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
//     console.log("equal");
// }else{
//     console.log("false");
// }