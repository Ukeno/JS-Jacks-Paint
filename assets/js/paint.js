function configureListeners() {
    let images = document.getElementsByTagName('img');
    // ^ select img element

    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false);
        document.getElementById(images[i].id).addEventListener('mouseover', removeOpacity, false);
    }
}
// ^ iterate over images and add mouseover event listeners.
// ^ Adds mouse over and removes opacity

function addOpacity(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim');
    }
    getProductInfo(event.target.id);
}
// ^ add appropriate CSS class. For Opacity

//remove appropriate CSS class
//same as addOpacity except the bang! and add
function removeOpacity(event) {
    if (this.classList.contains('dim')) {
        this.classListremove('dim');
    }
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    // set variables for price and color name and invoke a function to update the price. on all 9
    switch (paintColor) {
        case 'pn1': // Lime Green
            price = '$14.99'
            colorName = 'Lime Green';
            updatePrice(colorName, price)
            break;
        case 'pn2': // Medium Brown
            price = '$11.14'
            colorName = 'Medium Brown';
            updatePrice(colorName, price)
            break;
        case 'pn3': // Royal Blue
            price = '22.99'
            colorName = 'Royal Blue';
            updatePrice(colorName, price)

            break;
        case 'pn4': // Solid Red
            price = '$13.42'
            colorName = 'Solid Red';
            updatePrice(colorName, price)

            break;
        case 'pn5': // Solid White
            price = '$21.98'
            colorName = 'Solid White';
            updatePrice(colorName, price)

            break;
        case 'pn6': // Solid Black
            price = '$4.99'
            colorName = 'Solid Black';
            updatePrice(colorName, price)

            break;
        case 'pn7': // Solid Cyan
            price = '$8.22'
            colorName = 'Solid Cyan';
            updatePrice(colorName, price)

            break;
        case 'pn8': // Solid Purple
            price = '$11.99'
            colorName = 'Solid Purple';
            updatePrice(colorName, price)

            break;
        case 'pn9': // Solid Yellow
            price = '$14.99'
            colorName = 'Solid Yellow';
            updatePrice(colorName, price)

            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = document.getElementById('color-price')// select element with corresponding id
        colorPrice.textContent = price;// display price

        let color = document.getElementById('color-name')// select element with corresponding id
        color.textContent = colorName;    //display color name
    }

}


