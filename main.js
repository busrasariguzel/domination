function imageSource(id,url){
    const newImage = document.querySelector(id)
    newImage.src = url
}
//  his solution
// function idAndUrl(id, url){
//     const image = document.querySelector(id);
//     image.src = url;
// }

// idAndUrl('#image-1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w')



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
// his solution

// function strikeThroughFirstItem(){
//     const firstItem = document.querySelector('ul#arguments li:first-child');
//     firstItem.style.textDecoration = 'line-through'

// }

// strikeThroughFirstItem()



putLineOnText('li');

function removesLastLi() {
    const removeNode = document.querySelector('ul#arguments li:last-child')
    removeNode.remove();

}

removesLastLi();

// his solution

// function removesLastLi(){
//     const lastLi = document.querySelector('ul > li:last-child');
//     lastLi.remove();
// }

// removesLastLi();

//  another way to do it

// function removesLastLi(){
//     const argumentList = document.querySelector('ul#arguments');
//     const lastLi = argumentList.lastElementChild;
//     lastLi.remove();}


//     function removesLastLi(){
//         // const argumentList = document.querySelector('ul#arguments');
//         // const lastLi = argumentList.lastElementChild;
//         const lastLi = document.querySelector('ul#arguments').lastElementChild;
//         lastLi.remove();}
//     const lastLi = document.querySelector('ul#arguments').lastElementChild;

// makes it shorter in one line



function appendToArgument(element){
    const toBeAppended = document.querySelector('ul');
    toBeAppended.appendChild(element);
}
// his solution-shorter

// function addArgument(element){
//     document.querySelector('ul#argument').appendChild(element)
// }



const newImage = document.createElement('img');
newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmdG435HxyF0e1DP1IBVos10zTwuNJ0p9M_iYDzlYWup6AgfV6w'
// const newArguments = document.querySelector('#arguments')
appendToArgument(newImage);






function modifyImage(image){
    image.style.height = '30px'

}

// SOLUTIONS

// function makeSmall(image){
//     image.style.height = '30px'

// }

// const newSmallImage = document.querySelector('#image-2')
// modifyImage(newSmallImage);

const newSmallImage = document.querySelector('img')
modifyImage(newSmallImage);



function givesClass(element){
    const newElementWithClass= document.querySelector(element);
    newElementWithClass.className = 'invisible'
}
// SOLUTION
// function givesClass(element){
//     element.className = 'invisible'
// }
// function givesClass(query){
//     document.querySelector(query).className = 'invisible'
// }

givesClass('h1');



//  const newH1 = document.querySelector('h1');




function settingFontToId(fontSize, id){
    const element = document.querySelector(id)
    element.style.fontSize = fontSize;
}
//  solution

// function settingFontToId(element, fontSize){
//     element.style.fontSize = fontSize;


// }





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
// 
// function creatingNewHeader(headerSize,someText){
//     const newH = document.createElement('h' + headerSize);
//     newH.innerHTML = someText;
//     return newH;
// 




const appendingNewHeader= creatingNewHeader('3', 'I hate mondays');
appendToArgument(appendingNewHeader);


// HIS SOLUTIONS




