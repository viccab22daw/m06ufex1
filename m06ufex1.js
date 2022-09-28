window.onload = function () {

    let guanyades = 0;
    let perdudes = 0;
    let empatades = 0;


    document.getElementById('botoPedra').onclick = function () {
        let aleatori = Math.floor(Math.random() * 3)
        if (aleatori == 0) {
            document.getElementById('sortida').innerHTML = 'Has tret pedra i la màquina pedra, ÉS UN EMPAT!';
            empatades++;
            document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
            document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
            document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }
        else if (aleatori == 1){
            perdudes++;
        document.getElementById('sortida').innerHTML = 'Has tret pedra i la màquina paper, PERDS!';
        document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
        document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
        document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
    }
        else if (aleatori == 2){
        guanyades++;
        document.getElementById('sortida').innerHTML = 'Has tret pedra i la màquina tisores, GUANYES!';
        document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
        document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
        document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }
    }

    document.getElementById('botoPaper').onclick = function () {
        let aleatori = Math.floor(Math.random() * 3)
        if (aleatori == 0) {
            guanyades++;
            document.getElementById('sortida').innerHTML = 'Has tret paper i la màquina pedra, GUANYES!';
            document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
            document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
            document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
            
        }
        else if (aleatori == 1){
        empatades++;
        document.getElementById('sortida').innerHTML = 'Has tret paper i la màquina paper, ÉS UN EMPAT.';
        document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
        document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
        document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }
        else if (aleatori == 2){
        perdudes++;
        document.getElementById('sortida').innerHTML = 'Has tret paper i la màquina tisores, PERDS!';
        document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
        document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
        document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }

    }

    document.getElementById('botoTisores').onclick = function () {
        let aleatori = Math.floor(Math.random() * 3)
        if (aleatori == 0) {
            perdudes++;
            document.getElementById('sortida').innerHTML = 'Has tret tisores i la màquina pedra, PERDS!';
            document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
            document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
            document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }
        else if (aleatori == 1) {
            guanyades++;
            document.getElementById('sortida').innerHTML = 'Has tret tisores i la màquina paper, GUANYES!';
            document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
            document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
            document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }

        else if (aleatori == 2){
        document.getElementById('sortida').innerHTML = 'Has tret tisores i la màquina tisores, ÉS UN EMPAT.';
        empatades++;
        document.getElementById('guanys').innerHTML = 'Partides guanyades: ' + guanyades;
        document.getElementById('perduts').innerHTML = 'Partides perdudes: ' + perdudes;
        document.getElementById('empats').innerHTML = 'Partides empatades: ' + empatades;
        }

    }





}