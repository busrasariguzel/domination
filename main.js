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

