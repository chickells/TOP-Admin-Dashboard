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
        people: [],
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
        }
    }

    people.init();
})()