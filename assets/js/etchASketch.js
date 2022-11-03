/* eslint-disable no-undef */
const $sketchpad = $('#sketchpad');
let gridnum = 16;

$(window).on('load',() => {
    createGrid();
});

const createGrid = () => {
    for (let i = 0; i < gridnum; i++) {
        $sketchpad.append('<div id=\'row' + i.toString() + '\' class=\'row\'></div>');
        let $row = $('#row' + i.toString());
        for (let j = 0; j < gridnum; j++) {
            $row.append('<div id="coli' + i.toString() + 'j' + j.toString() + '" class="col"></div>');
        }
    }

    $('.col').hover((obj) => {
        //console.log('test', obj.target.id);
        $('#' + obj.target.id).addClass('hovered');
    });
    $('.col').css({
        'width': (900 / gridnum).toString() + 'px',
        'height': (900 / gridnum).toString() + 'px'
    });
};

// eslint-disable-next-line no-unused-vars
const userCreateGrid = () => {
    console.log('test');
    gridnum = Number(prompt('Select size of grid (max 100)', gridnum));
    if (gridnum < 1 || gridnum > 100 || !gridnum) {
        gridnum = 100;
    }
    console.log('gridnum', gridnum);
    $sketchpad.empty();
    createGrid();
};