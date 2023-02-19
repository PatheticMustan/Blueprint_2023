document.onload = () => {
  // code to make textarea auto-resize
  const rantbox = document.getElementById("rantbox");
  for (let i=0; i<rantbox.length; i++) {
    rantbox[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    rantbox[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
  }
}