 const jokeE1 = document.getElementById('joke')
 const jokeBtn = document.getElementById('jokeBtn')

 generateJoke()

 jokeBtn.addEventListener('click', generateJoke)

 async function generateJoke(){
    const response = await fetch('http://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'}
    })

    const data = await response.json()
    jokeE1.innerHTML = data.joke
 }