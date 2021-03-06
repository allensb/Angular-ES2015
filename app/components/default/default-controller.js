class DefaultController {

    constructor() {
        let vm = this;
        
        let [year = 1995, rating = 78] = [];    // jshint ignore:line 
        vm.firstMovie = movie('Braveheart', 3, year, rating);
        vm.secondMovie = movie('Ant-Man', 2, undefined, 79);
    }
}

function movie (title, length, year = 2015, rating = 0) {
    return `${title} was ${length} hours long. It came out in ${year} and had a rating of ${rating}.`;
}

export default DefaultController;
