const btnSave = document.getElementById("save");
const container = document.getElementById("root");

btnSave.addEventListener('click', () => {
    let date = document.getElementById('datos').value;
    console.log(date);
    //container.innerHTML = `<p class="name"> ${date} <p>`;
    for(let i = 0; i < date.length; i++){
        //console.log(date[i]);
        container.innerHTML += `<div>
                                    <li> 
                                        ${date[i]} 
                                    </li>
                                </div>`
    }
})