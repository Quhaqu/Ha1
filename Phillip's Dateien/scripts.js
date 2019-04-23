function saveUserInput(){
  if (typeof(Storage) !== "undefined") {

    localStorage.taskdescription = document.getElementById("taskname").value;
    localStorage.locompletion = document.getElementById("locompletion").value;
    localStorage.taskdescription = document.getElementById("taskname").value;



    document.getElementById("homepage").click();

  } else {
    document.getElementById("result").innerHTML = "Your browser is trash, looks like you gotta use pen and paper for this";
  }
}


function updateTableIfNecessary(){

}
