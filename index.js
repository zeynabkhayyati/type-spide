let timer_text = document.querySelector('.timer-text');
let textarea = document.querySelector('textarea');
let test_text = document.querySelector('.test-text'); 
let text_div = document.querySelector('.text-div');

let timer = [0 , 0];
timer[0] = '00'
function timerRun(){
    timer[1]++;
    let m = 0 
    if(timer[1] == 60){
        timer[0] = 0
        m++
        timer[0] = m
        timer[1] = '00'
        if(timer[0] < 10){
            timer[0] = `0${timer[0]}`
        }    
        
    }
    if(timer[1] < 10){
        timer[1] = `0${timer[1]}`
    }

    let timer2
    timer2 = `${timer[0]} : ${timer[1]}`
    timer_text.innerHTML = timer2
    g++
}

let g = 1  ; 
function start(){
    if(textarea.value.length == g){
        setInterval(()=>timerRun() , 1000)
    }
}

textarea.addEventListener('keyup' , ()=>{
    start()
    check()
})

let i = -1 ; 
function check(){
    i++ ;
    if(test_text.innerHTML[i] == textarea.value[i]){
        text_div.classList.remove('bg-secondary')
        text_div.classList.remove('bg-warning')
        text_div.classList.add('bg-success')
        test_text.classList.add('text-black')

    }else{
        text_div.classList.remove('bg-secondary')
        text_div.classList.remove('bg-success')
        text_div.classList.add('bg-warning')
        test_text.classList.add('text-black')
    }
}