// 11.23.22 6:13a update
// just finished Modular JS #6, now on to #7
// https://www.youtube.com/watch?v=doXpW5AD60Q&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=7
// talking about inheritance and prototypes, etc. seems to be sort of making sense?
// basically talking about concepts of keeping certain aspects of your code
// private within that chunk, and can't be accessed/modified outside of the desired scope
//
// introducing the aspect of security. alright. let's meditate and head to work!
// THIS FUCKING COFFEE IS SO FUCKING GOOD I FINALLY FOUND THE BLUEBERRY FLAVOR!!!!!!


////////////////////////////////////////

//object literal
var myModule = {
    name: 'Will',
    age: 34,
    sayName: function() {
        alert(this.name);
    },
    setName: function(newName) {
        this.name = newName
    }
};

myModule.setName('Willis')
myModule.sayName();

/////////////////////////
// part 2
/////////////////////////



(function() {
    var people = {
        people: ['Will', 'Steve'],
        init: function() {
            this.cacheDom();
        },
        cacheDom: function() {
            this.$el = $('#peopleModule')
            this.$button = this.$el.find('button')
            this.$input = this.$el.find('input')
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html()
        },
        render: function () {
            // 8:04 ON VIDEO //
            // https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=2
            // THIS FEELS HELPFUL??
            // IDK BUT TIME TO WORKOUT
            var data = {
                people: this.people,
            }
            this.$ul.html(Mustache.render(this.template, data));
        }
    }

    people.init();
})()