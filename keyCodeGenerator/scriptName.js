const container = document.getElementById('container');
const large = document.getElementById('lrgNumber')
window.addEventListener('keydown', (event) => {
    // const {key, which, code} = event; 
    const key = event.key;
    const which = event.which;
    const code = event.code;  
   
    container.innerHTML = `
   
    <div id="container">
    <br><br>
    <div>
        <h1 id="lrgNumber">${which}</h1>
    </div>
        <div  class="box">
            <h3>event.key</h3>
            <p>${key}</p>
        </div>
        
        <div class="box">
            <h3>event.which</h3>
            <p>${which}</p>
        </div>
        <div class="box">
            <h3>event.code</h3>
            <p>${code}</p>
        </div>
    </div>
`;

})


