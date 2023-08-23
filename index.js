let myIndex = -1;
const handleClick = (e) => {
  myIndex = e;
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
