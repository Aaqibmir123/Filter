//add form
var form = document.querySelector("#addForm");
var item = document.getElementById("items");
var filters = document.getElementById("filter");


//form submit
form.addEventListener('submit', additem);


//add items
function additem(e) {
    e.preventDefault();

    //Get the value of input
    var newItem = document.getElementById("texts").value;

    //create new li

    var newli = document.createElement("li");

    //classname
    newli.className = "new-list";

    //now add and create text element or node with input value
    newli.appendChild(document.createTextNode(newItem));

    //create delete button

    var del = document.createElement("Delete");

    //classname to button
    del.className = "dlt-button";

    //create text node and append to button
    del.appendChild(document.createTextNode("X"));

    //append button to li

    newli.appendChild(del)

    //
    item.appendChild(newli);


}

// Delete event
item.addEventListener('click', removeitem);

//remove item
function removeitem(e) {

    if (e.target.classList.contains("dlt-button")) {
        console.log(1);

        if (confirm("Are you sure")) {

            var li = e.target.parentElement;
            item.removeChild(li);
        }

    }
}


//Filter Event
filters.addEventListener("keyup", filteritems);


function filteritems(e){

    //convert into lowercase
    var text=e.target.value.toLowerCase();
    //Grab all li
    var items=document.getElementsByTagName("li");
    var desss=document.getElementById("des");
    //convert into an array
    Array.from(items).forEach(function(item,desss){
        var itemnames=item.firstChild.textContent;
        if(itemnames.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }



    });

}


//For aading description too
form.addEventListener('submit', addDesc);
function addDesc(e){
    e.preventDefault();
   var desc=document.getElementById("des").value;
   var li=document.createElement("li");
   var descrption=document.createTextNode(desc);
   li.appendChild(descrption);
    
   var it=document.getElementById("items");
   it.appendChild(descrption);
}








