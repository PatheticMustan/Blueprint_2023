// code to make textarea auto-resize
const rantbox = document.getElementById("rantbox");
rantbox.setAttribute("style", "height:" + (rantbox.scrollHeight) + "px;overflow-y:hidden;");
rantbox.addEventListener("input", onInput, false);

function onInput() {
    this.style.height = 0;
    
    let targetHeight = Math.min(Math.max(152, this.scrollHeight), 300);
    this.style.height = targetHeight + "px";
    this.style.overflowY = (targetHeight===this.scrollHeight)? "hidden" : "scroll";
}

function submit() {
    rantbox.readOnly = true;
    const response = document.getElementById("response");
    let advice = "";
    
    Object.keys(keywords).map(word => {
        if (rantbox.value.indexOf(word) !== -1) {
            advice = advice + keywords[word] + "\n"
        }
    });
    
    response.innerHTML = "Rock: " + (advice || "[...]");
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
    "jealous":"Focus on yourself. Theres no point in dwelling over things other people have.",
    "difficult":"Its good to take a break, but make sure you know when to continue on! Forward soldier, march on! Remember, you can do this!",
    "struggling":"Keep working hard! I know you can do it! Just remember to take a break once in a while.",
    "hate":"Its okay not to like everything all the time. Sometimes you just have to be okay, with having your own opinions.",
    "horrible":"Its okay to have a bad day. You do not have to be happy 24/7. Keep in mind that you are human!",
    "give_up":"Have a little more confidence! Keeping a positive mindset will make things easier for you to do. Dont give up so soon! Keep trying.",
    "depressed":"Life gets tough, but that okay. Keep working through it! You've",
    "busy":"Be sure that you have time for yourself! Try and keep yourself organized so that things dont get too much for you.",
    "tired":"I know things can be exhausting, be sure to take breaks and refresh your head.",
    "exhausted":"I see that you're tired. Make sure to get some rest and continue on once you are in the right mental space.",
    "enjoyable":"Thats great! Its important to have a great time.",
    "fine":"Its great that youre doing fine. Hopefully that fine into great",
    "":"",
    "cool":"Im glad that youre having a fun time",
    "frustrating":"Be sure to take a break from stressful situations. Refresh your head then come back stronger than ever! I believe in you!",
    "amazing": "Im glad things are going so well for you!",
    "mad": "Try and keep a positive attitude! Youll get more stuff done with a positive mindset rather than a negative one",
    "angry": ""
  }