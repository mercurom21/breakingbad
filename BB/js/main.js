const charSearch = document.getElementById('inp-search');
const output = document.getElementById('output');

window.addEventListener('load', () => {
    loader();
    fetchCharcters();
});

charSearch.addEventListener('change', () => {
    let searchQuery = charSearch.value;
    loader();
    fetchCharcters(searchQuery);
});

function loader(){
    output.innerHTML = '<div style="margin:0 auto;" class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
}

async function fetchCharcters(query){
    let response;

    if(query){
        response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    }else{
        response = await fetch('https://www.breakingbadapi.com/api/characters');
    }

    let results = await response.json();

    output.innerHTML = "";

    results.map(result => {
        const htmlString = `<img src="${result.img}" class="img">
            <div class="info-display">
                <h5>Actor: ${result.portrayed}</h5>
                <hr>
                <div>Character Name: <span>${result.name}</span></div>
                <div>Alias: <span>${result.nickname}</span></div>
                <div>Occupation: <span>${result.occupation}</span></div>
                <div>Status: <span>${result.status}</span></div>
            </div>`;
    
    let outputString = document.createElement('div');
    outputString.classList.add('col-md-3', 'mb-3', 'img-info');
    outputString.innerHTML = htmlString;
    output.appendChild(outputString);
    });
}
