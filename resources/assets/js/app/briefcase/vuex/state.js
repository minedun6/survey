export default {
    grid: {
        // cell properties on the grid, representing [1x1]
        tileCell: {
            width: 66,
            height: 66
        },
        // default properties to resize tile
        tileResize: {
            width: 66,
            height: 66
        },
        // grid properties
        nbr: 150, // number of tiles,
        overlapDrag: false,
        overlapResize: false,
        overlapAdd: false,
        tiles: [],
        tile: {
            id: new Date().getTime(),
            title: '',
            description: '',
            design: {
                bgOpacity: '.8',
                bgColor: '#CD363C',
                textColor: '#ffffff'
            },
            position: {
                startX: 3,
                startY: 3,
                endX: 129,
                end_y: 129,
                width: 126,
                height: 126,
            },
            icon: {
                type: '',
                id: 0,
                src: ''
            }
        }
    },

}