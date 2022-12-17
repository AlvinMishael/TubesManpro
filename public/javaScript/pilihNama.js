const form = document.querySelector('form');
const btnSubmit = form.querySelector('button');

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
    
        console.log(data)
    
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
    const bookUri = '/' + book + '?'
    //console.log('book: '+book);

    const character = getCharacterName();
    const chararterUri = 'character=' + character
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