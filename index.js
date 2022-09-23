// console.log('hello world')
const message = document.querySelector('#message')
const form = document.querySelector('form')



const addMovie =(event)=>{
    event.preventDefault()
    let inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const  movieTitle = document.createElement('span')
    const deleteBtn = document.querySelector('button')
    movieTitle.addEventListener('click', crossOffMovie )
    deleteBtn.addEventListener('click',deleteMovie )
    movieTitle.textContent = inputField.value
    deleteBtn.textContent = 'x'
    
    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)
    
    document.querySelector('ul').appendChild(movie)
    
    inputField = ''
    
}


const deleteMovie = (event) =>{
    event.target.parentNode.remove() 
    message.textContent = "Movie deleted"
    
}
const crossOffMovie = (event)=>{
    event.target.classList.toggle('checked') 
    if(event.target.classList.contains('checked') === true ){
        message.textContent ="Movie watched!"
    } else{
        message.textContent = 'Movie added back!'
    }
    
}

form.addEventListener('submit', addMovie)


