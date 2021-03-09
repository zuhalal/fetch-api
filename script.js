const btn = document.getElementById("btn").addEventListener("click", getPost),
    results = document.getElementById("body-table"),
    url = "https://jsonplaceholder.typicode.com/posts";

let jumlah = 0;

function getPost() {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((post) => {
            results.innerHTML += `            
                <tr>
                    <td class="pr-2 border-solid border-2">${post[jumlah].userId}</td>
                    <td class="pr-2 border-solid border-2">${post[jumlah].id}</td>
                    <td class="pr-2 border-solid border-2">${post[jumlah].title}</td>
                    <td class="pr-2 border-solid border-2">${post[jumlah].body}</td>
                </tr>
            `
            jumlah ++;
    })
}