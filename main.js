function imageSource(id,url){
    const newImage = document.querySelector(id)
    newImage.src = url
}

const newUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w'
imageSource('#image-1',newUrl);
const newUrl2 = ""
imageSource('#image-2',newUrl);
const newUrl3 = ""
imageSource('#image-3',newUrl);

function putLineOnText(element){
    const newLi = document.querySelector(element)
    newLi.style.textDecoration = 'line-through';
}

putLineOnText('li');

function removesLastLi() {
    const removeNode = document.querySelector('ul#arguments li:last-child')
    removeNode.remove();

}

removesLastLi();

function appendToArgument(element){
    const toBeAppended = document.querySelector('ul');
    toBeAppended.appendChild(element);
}



const newImage = document.createElement('img');
newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w'
// const newArguments = document.querySelector('#arguments')
appendToArgument(newImage);



function modifyImage(image){
    image.style.height = '30px'

}

const newSmallImage = document.querySelector('img')
modifyImage(newSmallImage);

function givesClass(element){
    const newElementWithClass= document.querySelector(element);
    newElementWithClass.className = 'invisible'

}
const newH1 = document.querySelector('h1');
givesClass('h1');



function settingFontToId(fontSize, id){
    const element = document.querySelector(id)
    element.style.fontSize = fontSize;
}


settingFontToId('xx-large', '#heading')

//  part 3 

function creatingNewLi(str){
    const theNewLi = document.createElement('li');
    theNewLi.innerText = str
    return theNewLi;
}

const theNewText = creatingNewLi('hello world');
appendToArgument(theNewText);

function creatingNewHeader(headerSize,someText){
    const newH = document.createElement('h' + headerSize);
    newH.innerHTML = someText;
    return newH;
}
const appendingNewHeader= creatingNewHeader('3', 'I hate mondays');
appendToArgument(appendingNewHeader);