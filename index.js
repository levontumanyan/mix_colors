let outer_div = document.getElementById("outer-div");
let show_rgb_value = document.getElementById("show-rgb-value");

let mix_color_button = document.getElementById("mix-color-button");

let display_rgb_h1 = document.getElementById("display-rgb-h1");

mix_color_button.addEventListener("click", changeColor_body);
mix_color_button.addEventListener("click", changeColor_button);
mix_color_button.addEventListener("click", displayColor);



function changeColor_body() {
    let red = get_random_integer_rgb();
    let green = get_random_integer_rgb();
    let blue = get_random_integer_rgb();

    outer_div.style.backgroundColor = rgbify(red, green, blue);

    show_rgb_value.innerHTML = rgbify(red, green, blue);
}

function changeColor_button() {
    let red = get_random_integer_rgb();
    let green = get_random_integer_rgb();
    let blue = get_random_integer_rgb();

    mix_color_button.style.background = rgbify(red, green, blue);
}



function get_random_integer_rgb () {
    return Math.floor(Math.random() * 255);
}

function rgbify (red, green , blue) {
    return "rgb(" + red + "," + green + "," + blue + ")";
}



