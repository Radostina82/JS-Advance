window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const placeholderField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const btnAdd= document.getElementById('add');
    const furnitureList = document.getElementById('furniture-list');

    btnAdd.addEventListener('click', onAdd);

    function onAdd(ev){
        ev.preventDefault();

        if(modelField.value == '' || placeholderField.value == '' || yearField.value == ''
        || priceField.value == '' || isNaN(Number(priceField.value)) || 
        isNaN(Number(yearField.value)) || Number(priceField.value)<0 || Number(yearField.value)<0){
            return;
        }
        const trInfo = document.createElement('tr');
        trInfo.setAttribute('class', 'info');

        const tdModel = document.createElement('td');
        tdModel.textContent = modelField.value;

        const tdPrice = document.createElement('td');
        tdPrice.textContent =Number(priceField.value).toFixed(2);

        const tdBtn = document.createElement('td');

        const moreBtn = document.createElement('button');
        moreBtn.setAttribute('class', 'moreBtn');
        moreBtn.textContent = 'More Info';

        const buyBtn = document.createElement('button');
        buyBtn.setAttribute('class', 'buyBtn');
        buyBtn.textContent = 'Buy it';

        tdBtn.appendChild(moreBtn);
        tdBtn.appendChild(buyBtn);

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdBtn);

        const trHide = document.createElement('tr');
        trHide.setAttribute('class', 'hide');

        const tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearField.value}`;
        const tdColspan = document.createElement('td');
        tdColspan.setAttribute('colspan', '3');
        tdColspan.textContent =`Description: ${placeholderField.value}!`;

        trHide.appendChild(tdYear);
        trHide.appendChild(tdColspan);

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHide);

        modelField.value = '';
        yearField.value = '';
        placeholderField.value = '';
        priceField.value = '';

        moreBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            ev.target.textContent = 'Less Info';

            trHide.style.display = 'contents';

            moreBtn.addEventListener('click', (e)=>{
                e.preventDefault();
                e.target.textContent = 'More Info';

                trHide.style.display = 'none';
            });
        });
        buyBtn.addEventListener('click', (e)=>{
            e.preventDefault();

            let toatlSum = document.getElementsByClassName('total-price')[0];
            let total = Number(document.getElementsByClassName('total-price')[0].textContent);
            const price =Number(e.target.parentElement.parentElement.children[1].textContent);
            total +=price;

            e.target.parentElement.parentElement.remove();
            toatlSum.textContent = total.toFixed(2);
            
        });

    }
}
