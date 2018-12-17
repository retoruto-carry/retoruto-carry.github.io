const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const app = new Vue({
    el: '#app',
    data: {
        template: '[名前]のねこ度は[list1]%です。',
        list: list,
        name: '',
        result: ''
    },
    methods: {
        shindan: function () {
            this.result = this.template.replace(/\[名前]/g, this.name);
            let random = this.random(this.list, this.name);
            this.result = this.result.replace(/\[list1\]/g, random);
        },
        tweetResult: function () {
            this.customTweet(encodeURIComponent(this.result));
        },
        tweet: function () {
            let shareURL =  "https://twitter.com/share?url=https://retoruto-carry.github.io/shindan.html&text=%23あなたのねこ度がわかるボタン";
            window.open(shareURL);
        },
        customTweet: function (text) {
            let shareURL =  "https://twitter.com/share?url=https://retoruto-carry.github.io/shindan.html&text=" + text + "%0a%23あなたのねこ度がわかるボタン";
            window.open(shareURL);
        },
        random: function (array, name) {
            if (name) {
                let my_chance = new Chance(this.name);
                return array[my_chance.natural({min: 0, max: array.length-1})];
            } else {
                return array[Math.floor(Math.random() * array.length)];
            }
        }
        
    },

})


