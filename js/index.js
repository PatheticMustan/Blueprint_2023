// code to make textarea auto-resize
const rantbox = document.getElementById("rantbox");
rantbox.setAttribute("style", "height:" + (rantbox.scrollHeight) + "px;overflow-y:hidden;");
rantbox.addEventListener("input", onInput, false);

const previousPosts = document.getElementById("previousPosts");
// check localStorage.posts
if (localStorage.getItem("posts") === null) {
    // if it's undefined, set a default
    localStorage.setItem("posts", JSON.stringify([]));
} else {
    // if it's not undefined, populate the previousPosts field
    const posts = JSON.parse(localStorage.getItem("posts"));
    posts.map(([date, text]) => {
        addPost(date, text);
    });
}

function onInput() {
    this.style.height = 0;
    
    let targetHeight = Math.min(Math.max(152, this.scrollHeight), 300);
    this.style.height = targetHeight + "px";
    this.style.overflowY = (targetHeight===this.scrollHeight)? "hidden" : "scroll";
}

function submit() {
    //rantbox.readOnly = true;

    const response = document.getElementById("response");
    let advice = "";
    
    Object.keys(keywords).map(word => {
        if (rantbox.value.indexOf(word) !== -1) {
            advice = advice + keywords[word] + "<br><br>";
        }
    });
    // add rock advice
    response.innerHTML = "Rock: " + (advice || "[...]");


    // append to previousPosts, save
    const currentDate = new Date();
    addPost(currentDate, rantbox.value);

    // add to localStorage
    const posts = JSON.parse(localStorage.getItem("posts"));
    posts.push([currentDate, rantbox.value]);
    localStorage.setItem("posts", JSON.stringify(posts));

    rantbox.value = "";
}

function addPost(currentDate, text) {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    
    const row = document.createElement("div");
    const date = document.createElement("div");
    date.innerText = new Date(currentDate).toLocaleDateString('en-us', options);
    const postText = document.createElement("div");
    postText.innerText = text;
    // const deleteButton = document.createElement("button");
    // deleteButton.innerText = "Delete";
    // deleteButton.onclick = () => {}
    
    row.classList.add("row");
    row.appendChild(date);
    row.appendChild(postText);
    // row.appendChild(deleteButton);

    previousPosts.prepend(row);

    
}