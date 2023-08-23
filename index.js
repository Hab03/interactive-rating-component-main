let myIndex = -1;
const handleClick = (e) => {
  myIndex = e;
  if(e===1){
    document.getElementsByClassName("one")[0].style.backgroundColor="hsl(217, 12%, 63%)";
    document.getElementsByClassName("one")[0].style.color="white";
  }
  else if(e===2){
    document.getElementsByClassName("two")[0].style.backgroundColor="hsl(217, 12%, 63%)";
    document.getElementsByClassName("two")[0].style.color="white";
  }
  else if(e===3){
    document.getElementsByClassName("three")[0].style.backgroundColor="hsl(217, 12%, 63%)";
    document.getElementsByClassName("three")[0].style.color="white";
  }
  else if(e===4){
    document.getElementsByClassName("four")[0].style.backgroundColor="hsl(217, 12%, 63%)";
    document.getElementsByClassName("four")[0].style.color="white";
  }
  else if(e===5){
    document.getElementsByClassName("five")[0].style.backgroundColor="hsl(217, 12%, 63%)";
    document.getElementsByClassName("five")[0].style.color="white";
  }


};

const handleSubmit = (e) => {
  if (myIndex ===-1) {
    document.getElementsByClassName("thank-you-state")[0].style.display =
      "none";
  } else {
    document.getElementsByClassName("main")[0].style.display = "none";
    document.getElementById("indexToBeChanged").innerText = myIndex;
    document.getElementsByClassName("thank-you-state")[0].style.display =
      "block";

  }
};
