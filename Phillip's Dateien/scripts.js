function saveUserInput(){
  if (typeof(Storage) !== "undefined") {

    localStorage.taskdescription = document.getElementById("taskname").value;
    localStorage.locompletion = document.getElementById("locompletion").value;
    localStorage.deadline = document.getElementById("deadline").value;

    console.log(localStorage.taskdescription);
    console.log(localStorage.locompletion);
    console.log(localStorage.deadline);
    localStorage.NewTaskFlag = "1";
    document.getElementById("homepage").click();


  } else {
    document.getElementById("result").innerHTML = "Your browser is trash, looks like you gotta use pen and paper for this";
  }
}


function updateTableIfNecessary(){
  if (localStorage.NewTaskFlag === "1"){      //New insertion needed?
    //if(localStorage.actualtable){       //already a table saved?
    if(localStorage.actualtable){
     document.getElementById('tasktable').innerHTML = localStorage.actualtable;
   }
    //}
    //else{
    var table = document.getElementById('tasktable');
    //}
    var newtask = table.insertRow(1);
    var desccell = newtask.insertCell(0);
    var completioncell = newtask.insertCell(1);
    var deadlinecell = newtask.insertCell(2);
    var buttoncell = newtask.insertCell(3);

    desccell.innerHTML = localStorage.taskdescription;
    completioncell.innerHTML=localStorage.locompletion;
    deadlinecell.innerHTML=localStorage.deadline;
    buttoncell.innerHTML= '<button type="button" class="btn btn-primary" onclick=deleteshit();> X </button>' ;

    localStorage.NewTaskFlag = "0";
    localStorage.actualtable = table.outerHTML;
    document.getElementById('tasktable').innerHTML = localStorage.actualtable;
  }
  else{
    if(localStorage.actualtable){
    document.getElementById('tasktable').innerHTML = localStorage.actualtable;
    }

  }
}


function deleteshit(){
  var tmp=event.target.parentNode.parentNode;
         tmp.parentNode.removeChild(tmp);
}
