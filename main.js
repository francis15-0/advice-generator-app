const paragraph = document.querySelector('#text');
const button = document.querySelector('.circle');
const advice = document.querySelector('.advice-id');
button.addEventListener('click', ()=>{
    getAdvice().then((data)=>{
        console.log(data.slip.advice);
        paragraph.textContent = '';
        advice.textContent = '';
        paragraph.textContent = `"${ data.slip.advice}"`;
        advice.textContent = `ADVICE # ${data.slip.id}`;
    }).catch((error)=>{})

});


const getAdvice = async()=>{
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    if (!res.ok) {
        throw new Error("something happened");
    }
    return data;
}