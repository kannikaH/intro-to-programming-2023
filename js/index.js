const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
let copyright = document.createElement('p');

copyright.textContent = "Kannika "+ thisYear;
footer.append(copyright);

const skills = ["HTML", "CSS", "Javascript", "SQL"];
const skillsSection = document.getElementById("skills");
const skillsList =  skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message");
document.getElementById("messages").style.display = "none";
messageForm[0].addEventListener("submit", (event) => {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>&nbsp<span>${usersMessage}</span>&nbsp`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type= "button";
    
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.type= "button";

    messageForm[0].reset();
    
    removeButton.addEventListener("click",(e)=>{
        const entry = removeButton.parentNode;
        entry.remove();
        hideOrShowMessageSection();
    })

    editButton.addEventListener("click",(e) =>{
        if (editButton.textContent === 'edit') {
        const editMessage = newMessage.childNodes[2];
        const inputMessage = document.createElement('input');
        inputMessage.type="text";
        inputMessage.value = editMessage.textContent;
        newMessage.insertBefore(inputMessage,editMessage);
        newMessage.removeChild(editMessage);
        editButton.textContent = 'save';
        } else if (editButton.textContent === 'save') {
            const inputMessage = newMessage.childNodes[2];
            const editMessage = document.createElement('span');
            editMessage.type="text";
            editMessage.textContent = inputMessage.value;
            newMessage.insertBefore(editMessage,inputMessage);
            newMessage.removeChild(inputMessage);
            editButton.textContent = 'edit';
        }
    })
    
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    hideOrShowMessageSection();

    function hideOrShowMessageSection(){
        if (messageList.querySelector("li") != null) {
            document.getElementById("messages").style.display = "block";
        } else {
            document.getElementById("messages").style.display = "none";
        }
    }
});

 