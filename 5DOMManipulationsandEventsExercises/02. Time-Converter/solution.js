function attachEventsListeners() {
    const rotation = {
        days:1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    function convert(value, unit){
        const inDays = value / rotation[unit];
        
        return{
            days: inDays,
            hours: inDays * rotation.hours,
            minutes: inDays * rotation.minutes,
            seconds: inDays * rotation.seconds
        }
    }
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

   const parent = document.getElementsByTagName('main')[0];
    parent.addEventListener('click', onClick);

    function onClick(ev){
        if(ev.target.tagName == 'INPUT' &&  ev.target.type == 'button'){
        const input = ev.target.parentElement.querySelector('input[type="text"]');
        const time = convert(Number(input.value), input.id)
        
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }
    }
}