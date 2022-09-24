export default class Course {

    #name;
    #rating;
    #subject;

    /**
     * Create new Assignment instance
     *
     * @param {String} [name] the name of the course
     * @param {Number} [rating] the difficulty of the course
     * @param {String} [subject] sbuject category of course
     */
    constructor(name, rating, subject){
        this.#name = name;
        this.#rating = rating;
        this.#subject = subject;
    }

    get name () {
        return this.#name;
    }

    get rating () {
        return this.#rating;
    }

    get subject () {
        return this.#subject;
    }
}