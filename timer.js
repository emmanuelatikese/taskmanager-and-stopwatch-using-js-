        const Play = document.querySelector('#play')
        const Reset = document.querySelector('#reset')
        const body = document.querySelector('body')

        const mainContainer = document.querySelector('.containerTimer')
        const buttons = document.querySelector('button')
        const Timer = document.querySelector('.timeContainer')
        const color = ['lightgray', 'pink', 'orange', 'lightgreen', 'lightblue']
        let count = 0

        buttons.addEventListener('mouseover', ()=>{
            mainContainer.style.backgroundColor = color[count]
            body.style.backgroundColor = color[count]
            
            count = count + 1

            if (count === color.length){
                count = 0;
            }
        })

            let second  = 0
            let minute = 0
            let hour = 0

            let leadingsecond = 0;
            let leadinghour = 0;
            let leadingminute = 0;

            

        function startWatch(){
            
            

            second++;

            if (second >= 60){
                second = 0
                minute++
            }
            
            if (minute >= 60){
                minute = 0
                hour++
            }
            if (second < 10){
                leadingsecond = '0'+ second
            }
            else{
                leadingsecond = second
            }
            if (minute < 10){
                leadingminute = '0'+ minute
            }
            else{
                leadingminute = minute
            }
            if ( hour < 10){
                leadinghour = '0'+hour
            }
            else{
                leadinghour = hour
            }

            
            Timer.innerText = leadinghour +":"+ leadingminute +":"+ leadingsecond

            

        }
        
        let timer;

        Play.addEventListener('click',()=>{
            if(timer == null){
                timer = window.setInterval(startWatch, 1000)
                
                Play.innerHTML = 'pause'
            }
            else{
                
                window.clearInterval(timer)
                Play.innerHTML = 'play'
                timer= null
            }

        })
            
        Reset.addEventListener('click', ()=>{
                Timer.innerHTML = '00:00:00'
                Play.innerHTML = 'play'
                mainContainer.style.backgroundColor = 'rgba(53, 78, 174, 0.716)'
                body.style.backgroundColor = 'white';
                second=minute=hour = 0;
        })