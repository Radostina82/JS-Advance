function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    const obj = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254
    }

    function convert(){
        
        const input = document.getElementById('inputDistance');
        const numInput = Number(input.value);

        const inputUnits  = document.getElementById('inputUnits')
        const inputUnitsValue = inputUnits.value;

        const conv = document.getElementById('outputUnits');
        const convValue = conv.value;

        const result = (Number(obj[inputUnitsValue]) * numInput)/Number(obj[convValue]);
        //document.getElementById('outputDistance').style.display = '';
        document.getElementById('outputDistance').value = result;
    }
}