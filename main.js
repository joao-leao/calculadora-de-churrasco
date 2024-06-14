document.addEventListener('DOMContentLoaded', function() {
    const calcular = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');
    const input = document.querySelectorAll('.input');

    calcular.addEventListener('click', function(){
        const homens = parseInt(document.getElementById('homens').value);
        const mulheres = parseInt(document.getElementById('mulheres').value);
        const criancas = parseInt(document.getElementById('criancas').value);
        
        const Totalcarne = ((500 * homens) + (300 * mulheres) + (200 * criancas)) / 1000;
        const Totalfrango = ((200 * homens) + (200 * mulheres) + (100 * criancas)) / 1000;
        const Totallinguica = (200 * (homens + mulheres + criancas)) / 1000;
        const Totalrefrigerante = ((300 * homens) + (400 * mulheres) + (200 * criancas)) / 1000;
        const Totalcerveja = ((800 * homens )+ (500 * mulheres)) / 1000;

        resultado.innerHTML =  `
        <p>Quantidade de itens a serem comprados: </p>
            <ul>
                <li><img src="/assets/imgs/bife.svg" alt="imagem bife">${Totalcarne}Kg de carne bovina</li>
                <li><img src="/assets/imgs/frango.svg" alt="imagem frango">${Totalfrango}Kg de frango</li>
                <li><img src="/assets/imgs/linguica.svg" alt="imagem linguiça">${Totallinguica}Kg de linguiça</li>
                <li><img src="/assets/imgs/refrigerante.svg" alt="imagem refrigerante">${Totalrefrigerante}L de refrigerante</li>
                <li><img src="/assets/imgs/cerveja.svg" alt="imagem cerveja">${Totalcerveja}L de cerveja</li>
            </ul>
        `;
    });


    function limitarDigitos(input) {
        if (input.value.length > 3) {
            input.value = input.value.slice(0, 3); 
        }
    }

    input.forEach(input => {
        input.addEventListener('input', function () {
            limitarDigitos(this);
        });
        input.addEventListener('keydown', function () {
            limitarDigitos(this);
        });
        input.addEventListener('keyup', function () {
            limitarDigitos(this);
        });
        input.addEventListener('focus', function () {
            if (this.value == 0){
                this.value = '';
            }
        });
        input.addEventListener('blur', function () {
            if (this.value === ''){
                this.value = 0;
            }
        });
    });

});

