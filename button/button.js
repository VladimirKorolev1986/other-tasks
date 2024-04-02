function foo() {
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand
    }
    
    let result = [];
    console.log(randomInteger(0, 99))
    const tbl = document.createElement('table')
    for (let i = 0; i<=4; i++) {
        let tr = document.createElement('tr')
        for (let i = 0; i<=5; i++) {
           let td = document.createElement('td')
           let randd = randomInteger(0,99)
           if (randd>=50) {
                td.textContent = randd
                tr.append(td)
                td.style.backgroundColor = 'orange'
           }else {
            td.textContent = randd
           tr.append(td)
           }
        }
        tbl.append(tr)
    }
    document.body.append(tbl)
}