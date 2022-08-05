
const advice = document.getElementById('advice')
const adviceId = document.querySelector('#card__id')
const btn = document.getElementById('button')




btn.addEventListener('click', generateAdvise)

async function generateAdvise()  {
    const result = await fetch('https://api.adviceslip.com/advice').then((response) => response.json()).then((data) => data.slip);

    console.log(result);    

    adviceId.innerHTML = result.id
    advice.innerHTML = result.advice
}

