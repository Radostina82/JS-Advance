function addDestination(){
    
    const destinationList = document.getElementById('destinationsList');
    const season =  document.querySelector('.custom-select');
   
        const city = document.querySelectorAll('.inputData')[0];
        const country = document.querySelectorAll('.inputData')[1];

        if(city.value != '' && country.value != ''){

            const tr = document.createElement('tr');

            const destination = document.createElement('td');
            destination.textContent = `${city.value}, ${country.value}`;
            tr.appendChild(destination);

            const seasonTd = document.createElement('td');
            seasonTd.textContent = season.value.charAt(0).toUpperCase() + season.value.slice(1);
            tr.appendChild(seasonTd);
            destinationList.appendChild(tr);

            city.value = '';
            country.value = '';
            
            if(season.value == 'summer'){
                let countS = Number(document.getElementById('summer').value);
                countS +=1;
                document.getElementById('summer').value = countS;
            }else if(season.value == 'autumn'){
                let countA = Number(document.getElementById('autumn').value);
                countA +=1;
                document.getElementById('autumn').value = countA;
            }else if(season.value== 'winter'){
                let countW = Number(document.getElementById('winter').value);
                 countW+=1;
                 document.getElementById('winter').value = countW;
            }else if(season.value == 'spring'){
                let countSp = Number(document.getElementById('spring').value)
                countSp +=1;
                document.getElementById('spring').value = countSp;
            }
        }
        
    
}