
let menue = [
    {
        'name': 'Chefsalat',
        'description': 'knackiger Salat mit Schinken und Käse',
        'type': 'salad',
        'price': 7.90,
        'number': 0,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Pizza Magherita',
        'description': 'Pizza mit Tomatensauce und Mozarella',
        'type': 'pizza',
        'price': 8.20,
        'number': 1,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Pasta Aglio e Olio',
        'description': 'Nudeln mit Knoblauch und Olivenöl',
        'type': 'pasta',
        'price': 7.50,
        'number': 2,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Tiramisu',
        'description': 'leckere Creme mit Kakao und Sahne',
        'type': 'dessert',
        'price': 7.90,
        'number': 3,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Gemsichter Salat',
        'description': 'knackiger Salat mit Tomate, Gurke, Paprika',
        'type': 'salad',
        'price': 6.50,
        'number': 4,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Salat mit Putenbrust',
        'description': 'knackiger Salat mit Putenbruststreifen',
        'type': 'salad',
        'price': 7.90,
        'number': 5,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Pizza Salami',
        'description': 'Pizza mit reichlich Salami',
        'type': 'pizza',
        'price': 8.90,
        'number': 6,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Pizza Hawaii',
        'description': 'Pizza mit Schinken, Ananas und Curry',
        'type': 'pizza',
        'price': 8.90,
        'number': 7,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Pasta á la Bolognese',
        'description': 'Nudeln mit Fleischsauce und Käse überbacken',
        'type': 'pasta',
        'price': 7.90,
        'number': 8,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Pasta á la Carbonara',
        'description': 'Nudeln mit Speck und Ei, mit Käse überbacken',
        'type': 'pasta',
        'price': 7.90,
        'number': 9,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Eiscreme',
        'description': 'verschiedene Sorten auf Anfrage',
        'type': 'dessert',
        'price': 4.90,
        'number': 10,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Käsekuchen',
        'description': 'leckere Torte mit Quarkmasse',
        'type': 'dessert',
        'price': 5.90,
        'number': 11,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Softdrink',
        'description': 'Cola, Fanta, Sprite, Eistee',
        'type': 'beverage',
        'price': 2.90,
        'number': 12,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Fruchtsaft',
        'description': 'Apfel, Orange, Multivitamin',
        'type': 'beverage',
        'price': 3.50,
        'number': 13,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Bier',
        'description': 'verschiedene Sorten auf Anfrage',
        'type': 'beverage',
        'price': 2.50,
        'number': 14,
        'count': 1,
        'note': ''
    },
    {
        'name': 'Wasser',
        'description': 'still, medium oder classic',
        'type': 'beverage',
        'price': 2.00,
        'number': 15,
        'count': 1,
        'note': ''
    }
];

let basket = [];

function food() {
    let sort = menue.filter(d => d.type === 'salad');
    for (i = 0; i < 3; i++) {
        document.getElementById('favorites').innerHTML += `
            <div class="food">
                <div class="foodHeadline">
                    <h4>${sort[i]['name']}</h4>
                    <button class="btnHeight" title="Hinzufügen" onclick="addToBasket(${sort[i]['number']})">+</button>
                </div>
                <p>${sort[i]['description']}</p>        
                <p>${menue[i]['price'].toFixed(2)}€</p>           
            </div>
        `

    }

    for (i = 0; i < sort.length; i++) {
        document.getElementById('salads').innerHTML += `
            <div class="food">
                <div class="foodHeadline">
                    <h4>${sort[i]['name']}</h4>
                    <button class="btnHeight" title="Hinzufügen" onclick="addToBasket(${sort[i]['number']})">+</button>
                </div>
                <p>${sort[i]['description']}</p>
                <p>${sort[i]['price'].toFixed(2)}€</p>
                
            </div>
        `
    }
    sort = menue.filter(d => d.type === 'pizza');
    for (i = 0; i < sort.length; i++) {
        document.getElementById('pizza').innerHTML += `
            <div class="food">
                <div class="foodHeadline">
                    <h4>${sort[i]['name']}</h4>
                    <button class="btnHeight" title="Hinzufügen" onclick="addToBasket(${sort[i]['number']})">+</button>
                </div>
                <p>${sort[i]['description']}</p>
                <p>${sort[i]['price'].toFixed(2)}€</p>
                
            </div>
        `
    }

    sort = menue.filter(d => d.type === 'pasta');
    for (i = 0; i < sort.length; i++) {
        document.getElementById('pasta').innerHTML += `
            <div class="food">
                <div class="foodHeadline">
                    <h4>${sort[i]['name']}</h4>
                    <button class="btnHeight" title="Hinzufügen" onclick="addToBasket(${sort[i]['number']})">+</button>
                </div>
                <p>${sort[i]['description']}</p>
                <p>${sort[i]['price'].toFixed(2)}€</p>
                
            </div>
        `
    }

    sort = menue.filter(d => d.type === 'dessert');
    for (i = 0; i < sort.length; i++) {
        document.getElementById('dessert').innerHTML += `
            <div class="food">
                <div class="foodHeadline">
                    <h4>${sort[i]['name']}</h4>
                    <button class="btnHeight" title="Hinzufügen" onclick="addToBasket(${sort[i]['number']})">+</button>
                </div>
                <p>${sort[i]['description']}</p>
                <p>${sort[i]['price'].toFixed(2)}€</p>
                
            </div>
        `
    }
    sort = menue.filter(d => d.type === 'beverage');
    for (i = 0; i < sort.length; i++) {
        document.getElementById('beverage').innerHTML += `
            <div class="food">
                <div class="foodHeadline">
                    <h4>${sort[i]['name']}</h4>
                    <button class="btnHeight" title="Hinzufügen" onclick="addToBasket(${sort[i]['number']})">+</button>
                </div>
                <p>${sort[i]['description']}</p>
                <p>${sort[i]['price'].toFixed(2)}€</p>
                
            </div>
        `
    }

}

function addToBasket(i) {
    document.getElementById('content').innerHTML = '';
    let j = checkAv(i);
    if (j == 100) {
        basket.push(menue[i]);
    }
    else {
        basket[j]['count']++;
    }
    for (i = 0; i < basket.length; i++) {
        if (basket[i]['count'] == 0) {
            basket[i]['count'] = 1;
        }
        document.getElementById('content').innerHTML += `
        <div class="foodElement">
        <div id="count${i}" class="nameOfFood">
            <p>${basket[i]['count']}</p>
            <p>${basket[i]['name']}</p>
            <p>${(basket[i]['count'] * basket[i]['price']).toFixed(2)}€</p>
        </div>
        <div class="plusMinus">
            <div>
                <a href="#" onclick="higherLower(1,${i})"> <img  src="./img/plus.png"></a>
                <a href="#" onclick="higherLower(0,${i})"> <img  src="./img/minus.png"></a>
            </div>
            <a href="#" onclick="note(${i})" id="note${i}">Anmerkung hinzufügen</a>
        </div>
        <p>${basket[i]['note']}</p>
        </div>
        `;
    }
    let semisum = 0;
    for (i = 0; i < basket.length; i++) {
        semisum += (basket[i]['count'] * basket[i]['price']);
    }
    let delivery = document.getElementById('conditions').innerHTML;
    delivery = +delivery.replace(/[^\d.]/g, '') / 100;
    let total = semisum + delivery;
    document.getElementById('whatToPay').innerHTML = `
        <p>Zwischensumme: ${semisum.toFixed(2)}€</p>
        <p>Lieferkosten: ${delivery.toFixed(2)}€</p>
        <p><b>Gesamt: ${total.toFixed(2)}€</b></p>
    `
    getPayButton(semisum, total);
    if (basket.length>7) {
        document.getElementById('content').style='font-size:12px';
    }
    else {
        document.getElementById('content').style='font-size:16px';
    }
    
    
}

function checkAv(i) {
    let l = 100;
    for (j = 0; j < basket.length; j++) {
        if (menue[i]['name'] == basket[j]['name']) {
            l = j;
        }
    }
    return (l);
}

function reloadBasket() {
    if (basket.length > 0) {
        document.getElementById('content').innerHTML = '';
        for (i = 0; i < basket.length; i++) {
            document.getElementById('content').innerHTML += `
        <div class="foodElement">
        <div id="count${i}" class="nameOfFood">
            <p>${basket[i]['count']}</p>
            <p>${basket[i]['name']}</p>
            <p>${(basket[i]['count'] * basket[i]['price']).toFixed(2)}€</p>
        </div>
        <div class="plusMinus">
            <div>
                <a href="#" onclick="higherLower(1,${i})"> <img  src="./img/plus.png"></a>
                <a href="#" onclick="higherLower(0,${i})"> <img  src="./img/minus.png"></a>
            </div>
            <a href="#" onclick="note(${i})" id="note${i}">Anmerkung hinzufügen</a>
        </div>
        <p>${basket[i]['note']}</p>
        </div>
        `;
        }
        let semisum = 0;
        for (i = 0; i < basket.length; i++) {
            semisum += (basket[i]['count'] * basket[i]['price']);

        }

        let delivery = document.getElementById('conditions').innerHTML;
        delivery = +delivery.replace(/[^\d.]/g, '') / 100;
        let total = semisum + delivery
        document.getElementById('whatToPay').innerHTML = `
    <p>Zwischensumme: ${semisum.toFixed(2)}€</p>
    <p>Lieferkosten: ${delivery.toFixed(2)}€</p>
    <p><b>Gesamt: ${total.toFixed(2)}€</b></p>
    `
        getPayButton(semisum, total);
    }
    else {
        document.getElementById('content').innerHTML = `      
        <div id="content">
            <img src="./img/bag.png">
            <h3>Der Warenkorb ist leer</h3>
            <p>Füge leckere Gerichte hinzu</p>
        </div>
        
    `
    }
    if (basket.length>7) {
        document.getElementById('content').style='font-size:12px';
    }
    else {
        document.getElementById('content').style='font-size:16px';
    }
   
    
}

function getPayButton(semisum, total) {
    let min = document.getElementById('minimum').innerHTML;
    min = +min.replace(/[^\d.]/g, '') / 100;
    if (semisum >= min) {
        document.getElementById('whatToPay').innerHTML += `
        
        <button class="blue" onclick="payNow()">Bezahlen ${total.toFixed(2)}€</button>
        `
    }
    else {
        document.getElementById('whatToPay').innerHTML += `
        <p class="warning">Der Mindestbestellwert von ${min.toFixed(2)}€ <br> ist noch nicht erreicht.</p>
        <button class="grey" title="Der Mindesbestellwert ist noch nicht erreicht.">Bezahlen ${total.toFixed(2)}€</button>
        `
    }
    document.getElementById('resContent').innerHTML = `Bezahlen ${total.toFixed(2)}€`


    getPayButtonThin(semisum, total);
    
}

function payNow() {
    alert('Vielen Dank für deine Bestellung');
    basket = [];
    reloadBasket();
    let basketshow = document.getElementById('resContent').classList;
    basketshow.add("dnone");
    document.getElementById('payButton2').classList.add('dnone');
    for (i = 0; i < menue.length; i++) {
        menue[i]['count'] = 1;
    }

}

function higherLower(k, i) {
    if (k == 1) {
        basket[i]['count'] = parseInt(basket[i]['count']) + 1;
        reloadBasket();
    }
    else {
        basket[i]['count'] = parseInt(basket[i]['count']) - 1;
        if (basket[i]['count'] == 0) {
            basket.splice(i, 1);
            reloadBasket();

        }
        else {
            reloadBasket();
        }
    }
}

function note(i) {
    document.getElementById(`note${i}`).innerHTML = `
        <div class="noteWindow">
            <textarea name="" class="noteArea" id="notice${i}" cols="30" rows="10" placeholder="Anmerkung"></textarea>
            <div class="abortSave">
                <a href="#" onclick="event.stopPropagation(); reloadBasket()">Abbrechen</a>
                <a href="#" onclick="event.stopPropagation(); saveNote(${i})">Speichern</a>
            </div>
        </div>
    `;
    document.getElementById(`notice${i}`).focus();
}

function saveNote(i) {
    basket[i]['note'] = document.getElementById(`notice${i}`).value;
    reloadBasket();

}

function showBasket() {
    let basketshow = document.getElementById('resContent').classList;
    basketshow.remove("dnone");
    window.scrollTo(0, 0);
    if (basket.length > 0) {
        document.getElementById('resContent').innerHTML = '<div class="close" ><button onclick="kill()">x</button></div>';
        for (i = 0; i < basket.length; i++) {
            document.getElementById('resContent').innerHTML += `
            
        <div class="foodElement">
        <div id="count${i}" class="nameOfFood">
            <p>${basket[i]['count']}</p>
            <p>${basket[i]['name']}</p>
            <p>${(basket[i]['count'] * basket[i]['price']).toFixed(2)}€</p>
        </div>
        <div class="plusMinus">
            <div>
                <a href="#" onclick="higherLower(1,${i})"> <img  src="./img/plus.png"></a>
                <a href="#" onclick="higherLower(0,${i})"> <img  src="./img/minus.png"></a>
            </div>
            <a href="#" onclick="note(${i})" id="note${i}">Anmerkung hinzufügen</a>
        </div>
        <p>${basket[i]['note']}</p>
        </div>
        `;
        }
        let semisum = 0;
        for (i = 0; i < basket.length; i++) {
            semisum += (basket[i]['count'] * basket[i]['price']);

        }

        let delivery = document.getElementById('conditions').innerHTML;
        delivery = +delivery.replace(/[^\d.]/g, '') / 100;
        let total = semisum + delivery
        document.getElementById('resContent').innerHTML += `
            <p>Zwischensumme: ${semisum.toFixed(2)}€</p>
            <p>Lieferkosten: ${delivery.toFixed(2)}€</p>
            <p><b>Gesamt: ${total.toFixed(2)}€</b></p>
            `
        getPayButtonThin(semisum, total);
        let min = document.getElementById('minimum').innerHTML;
        min = +min.replace(/[^\d.]/g, '') / 100;
        if (semisum >= min) {
            document.getElementById('payButton2').onclick = payNow;
        }
        else {
            alert('Der Mindestbestellwert ist noch nicht erreicht.');
        }
    }
    else {
        document.getElementById('resContent').innerHTML = `      
        <div id="content">
            <img src="./img/bag.png">
            <h3>Der Warenkorb ist leer</h3>
            <p>Füge leckere Gerichte hinzu</p>
        </div>
        
    `

    }
    
}
function getPayButtonThin(semisum, total) {
    let min = document.getElementById('minimum').innerHTML;
    min = +min.replace(/[^\d.]/g, '') / 100;
    if (semisum > 0) {
        if (semisum >= min) {
            document.getElementById('btnThin').innerHTML = `
            
            <button class="blue2" id="payButton2" onclick="showBasket()">Bezahlen ${total.toFixed(2)}€</button>
            `
            document.getElementById('btnThin').classList.remove('dnone');
        }
        else {
            document.getElementById('btnThin').innerHTML = `
            <button class="grey2" id="payButton2" onclick="showBasket()" title="Der Mindestbestellwert ist noch nicht erreicht.">Bezahlen ${total.toFixed(2)}€</button>
            `
            document.getElementById('btnThin').classList.remove('dnone');
        }

    }

}

function kill() {
    let basketshow = document.getElementById('resContent').classList;
    basketshow.add("dnone");
}

window.onscroll = function () {
    let cart = document.getElementById('basket');
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        cart.style = 'top: 0;height: 100vh;';
    }
    else {
        cart.style = 'top: 70px;height: 95vh;';
    };

    if (window.scrollY > 500) {
        navbar.style = 'position:fixed; top: 0; margin-top: 0';
    }
    else {
        navbar.style = 'position: relative;';
    };
}

