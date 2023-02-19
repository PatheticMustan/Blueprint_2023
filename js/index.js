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
            advice = advice + keywords[word] + "\n"
        }
    })
    response.innerHTML="Rock: "+advice;
}

let keywords = {
    "angry": "Take a deep breath, you will feel better in no time.",
    "sad": "Do something that makes you happy, like listening to music.",
    "happy": "Keep doing what makes you happy!",
    "bad": "Things will get better don't you worry!",
    "not bad": "Focus on the good aspects of your day, somedays life is just normal.",
    "anti_social": "Try looking at social gatherings around your area so you can find people who share the same interests as you, be bold!", 
    "social": "Its always important to have some time for yourself, make sure you give yourself a day to relax and chill out.",
    "not_good": "There are a lot of things in this world that are bad, you just have to learn how to make the best of it!",
    "boring":"Be the change you want to see in the world! Your boredom is only temporary.",
    "chaotic":"Modern day life can be extremely stressful and chaotic, but its important to keep striving towards your goal and believing in yourself!",
    "chill":"Although it is good to take rest days, make sure to come back and focus on whatever goals you have planned!",
    "clingy":"Make sure to assert your boundaries and preferences in a relationship.",
  
  
  
  }