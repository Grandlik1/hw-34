'use strict';

void function (){
    const createTable = () => {
        const table = document.createElement('table');
        let number = 0;

        for (let i = 0; i < 10; i += 1) {
            const tr = document.createElement('tr');

            for (let x = 0; x < 10; x += 1) {
                const td = document.createElement('td');
                td.innerHTML = number += 1;
                tr.append(td);
            }

            table.append(tr);

        }

        document.body.append(table);
    }
    createTable()
}();