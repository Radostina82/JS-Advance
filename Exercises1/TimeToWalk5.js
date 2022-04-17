function timeToWalk(steps , meters, speed ){
let distanceMeters  = steps * meters;
let speed_m_s = speed* 1000 / 3600;
let timeInSecond = distanceMeters / speed_m_s;
let additional_time_s = Math.floor(distanceMeters / 500) * 60;
let totaTime = timeInSecond + additional_time_s;
let hours = Math.floor(totaTime / 3600);
let minutes = Math.floor((totaTime - (hours*3600))/60);
let seconds = Math.ceil(totaTime - (hours * 3600) - (minutes * 60))

console.log((hours<10?"0" : "") + hours + ':'+(minutes<10?'0':'') + minutes + ':' + (seconds<10?'0':'') + seconds);
}

timeToWalk(2564, 0.70, 5.5);