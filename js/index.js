document.onload = () => {
    // code to make textarea auto-resize
    const rantbox = document.getElementById("rantbox");
    rantbox.setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    rantbox.addEventListener("input", onInput, false);

    
}

function onInput() {
    alert(1);
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}

function submit() {
    rantbox.readOnly = true;
    const response=document.getElementById("response");
    let advice="";
    Object.keys(keywords).map(word => {
      if (rantbox.value.indexOf(word) !== -1) {
       advice=advice+keywords[word]+"\n"
      }
  })
  response.innerHTML=advice;
}

let keywords = {
    angry: "Take a deep breath.",
    sad: "Do something that makes you happy, like listening to music."
}

