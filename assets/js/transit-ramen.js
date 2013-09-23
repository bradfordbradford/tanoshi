$(document).ready(function() {
    $('body').addClass('ready');
    $('.tooltip').tooltipster();

    // $('.prompt').addClass('animated flash');

    $('.no-touch .ready .item.noodles').transition({ x: '280px', y: '-20px' }, 500,'snap');
    $('.no-touch .ready .item.shiitake').transition({ x: '330px', y: '-30px' }, 500,'snap');
    $('.no-touch .ready .item.pork').transition({ rotate:'+10deg', x: '540px', y: '-20px' }, 500,'snap');
    $('.no-touch .ready .item.bamboo').transition({ rotate:'-20deg', x: '680px', y: '-120px' }, 500,'snap');
    $('.no-touch .ready .item.bokchoy').transition({rotate:'-60deg', x: '700px', y: '-380px' }, 500,'snap');
    $('.no-touch .ready .item.corn').transition({ x: '830px', y: '-290px' }, 500,'snap');
    $('.no-touch .ready .item.scallions').transition({ x: '1000px', y: '-180px' }, 500,'snap');
    $('.no-touch .ready .item.seeds').transition({ x: '1080px', y: '-290px' }, 500,'snap');
});

