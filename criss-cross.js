const data = ['x', 'o', 'o', '', '', '', 'x', '', ''];

function display() {
    let html = '';

    for (let i = 0; i < data.length; i++) {
        const n = data[i];
        if (i % 3 === 0) {
            html += '<tr>';
        }
        html += '<td>' + n + '</td>';
        if ((i + 1) % 3 === 0) {
            html += '</tr>'
        }
    }

    document.getElementById('criss-cross-table').innerHTML = html
}

display()