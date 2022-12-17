const form = document.querySelector('form');
const btnSubmit = form.querySelector('button');
const links = document.querySelectorAll('link');

const initFetch = (uri) => {
    fetch(uri, {
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        //console.log('paginatin: '+data.pagination.dataCount);
        createTable(data);
    })
}

const getBookValue = () => {
    const selectTag = form.querySelector('#pilih-buku');
    return selectTag.value;
}

const getCharacterName = () => {
    const inputTag = form.querySelector('input');
    return inputTag.value;
}

const onClick = (ev) => {
    ev.preventDefault();

    const book = getBookValue();
    const bookUri = '/' + book + '?';
    //console.log('book: '+book);

    const character = getCharacterName();
    const chararterUri = 'character=' + character;
    // console.log('character: '+character);

    const page = 0;
    const pageUri = 'page=' + page;

    const APPEND = '&';

    const uri = '/getData' + bookUri + chararterUri + APPEND + pageUri;
    //console.log(uri);
    initFetch(uri);

    //console.log("Button's clicked!");
}

btnSubmit.addEventListener('click', onClick);

const clickPagination = (btn) => {
    //console.log(btn.value);
    initFetch(btn.value); 
    //console.log('clicked');
}

const createTable = (data) => {
    const characters = data.characters;
    const pagination = data.pagination;

    
    const table = document.querySelector('#table-wrapper tbody');
    const paginationWrapper = document.querySelector('ul');
    //console.log("paginationWrapper: "+paginationWrapper)

    let html = "";
    if(pagination.dataCount > 0) {
        for(let i = 0; i < characters.length; i++) {
            html += `
            <tr>
                <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    `+characters[i].Target+`
                </td>
                <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    `+characters[i].weight+`
                </td>
            </tr>
            `;
        }
    } else {
        html += `

        `
    }
    table.innerHTML =  html;

    html = "";
    //console.log('html: '+html)
    for(let i = 0; i < pagination.pageCount; i++) {
        html += `
        <li>
            <button id="link" onClick="clickPagination(this)" type="submit" value=`+pagination.links[i]+` class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                `+(i+1)+`
            </button>
        </li>
        `;
    }
    paginationWrapper.innerHTML = html;
}