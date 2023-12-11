//This is the class that will manage all your APIs
let data = []

class APIManager {
    constructor() {
        this.data = {}
        this.word = []
        this.USERDATA
    }


    getProfile() {

        $.get('https://randomuser.me/api/?page=3&results=10&seed=abc')
            .then(function(word) {

                data = word.results
                    // console.log(data)
                const source = $('.result_tamlplate').html();
                const template = Handlebars.compile(source);
                // console.log(data)

                let newHTML = template({ data: data[0] });

                $(".user-container").append(newHTML);



            })
    }
    getFriends() {
        $.get('https://randomuser.me/api/?page=3&results=10&seed=abc')
            .then(function(word) {

                data = word.results
                    // console.log(data)
                const source = $('.friends_tamlplate').html();
                const template = Handlebars.compile(source);
                // console.log(data)
                data.splice(6, 3)
                let newHTML = template({ data });

                $(".friends-container").append(newHTML);



            })

    }
    getQuote() {
        $.get(`https://api.kanye.rest/`)
            .then(function(word) {
                console.log(word.quote);
                $(".quote-container").append(word.quote);
            })
    }

    getPokemon() {
        const randomNumber = Math.floor(Math.random() * 1000) + 1
        $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
            .then(function(word1) {
                console.log(word1.forms[0].name);
                console.log(word1.sprites.front_default);

                const source = $('.pokemon_tamlplate').html();
                const template = Handlebars.compile(source);
                console.log(word1)

                let newHTML = template({ word2: word1.forms[0], word1 });

                $(".content-container").append(newHTML);


            })
    }
    getAbout() {

        $.get(`https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`)
            .then(function(word1) {
                // console.log(word1[0]);
                const source = $('.about_tamlplate').html();
                const template = Handlebars.compile(source);
                // console.log(word1)

                let newHTML = template({ word: word1[0] });

                $(".content-container").append(newHTML);


            })

    }





}