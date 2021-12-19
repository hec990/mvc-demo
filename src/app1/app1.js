import './app1.css'
import $ from 'jquery'

const $number = $('.number')
const $operation = $('.operation')
const n = localStorage.getItem("n");
$number.text(n || 100);


$operation.on("click", "button", e => {
    const $button = $(e.currentTarget);
    const index = $button.index();
    if(index === 0){
        let n = parseInt($number.text());
        n += 1;
        localStorage.setItem("n", n);
        $number.text(n);
    }else if(index === 1){
        let n = parseInt($number.text());
        n -= 1;
        localStorage.setItem("n", n);
        $number.text(n);
    }else if(index === 2){
        let n = parseInt($number.text());
        n *= 2;
        localStorage.setItem("n", n);
        $number.text(n);
    }else if(index === 3){
        let n = parseInt($number.text());
        n /= 2;
        localStorage.setItem("n", n);
        $number.text(n);
    }
  });

