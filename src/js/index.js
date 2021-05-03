import getJSON from './getJSON';
import Table from './Table';


getJSON('',(data) => {
    console.log(data);
});

getJSON('http://localhost:8000/api/v1/accounts',
    (err, records) => {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector('table');
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            Table.generateTableHead(table, data);
            Table.generateTable(table, dataRecords);

        }

});

