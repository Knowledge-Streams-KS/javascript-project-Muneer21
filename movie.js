const button = document.querySelector('.btn1')
button.addEventListener('click',()=>{
const name=document.getElementById('mname').value;
moviename(name);
})

const moviename = async(name) =>{
    const resp = await fetch(` http://www.omdbapi.com/?s=${name}&apikey=773c12a9`);
    const data = await resp.json();
    console.log(data);
}

