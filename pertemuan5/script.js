// const url = ""
fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
        const result = document.getElementById("list")
        data.forEach(item => {
            const paragraf = document.createElement("li")
            paragraf.textContent = item.avatar_url;
            result.appendChild(paragraf)
        })
    })
    .catch(error => {
        console.log(error);
    })      