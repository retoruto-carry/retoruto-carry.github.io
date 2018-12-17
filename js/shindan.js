const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const app = new Vue({
    el: '#app',
    data: {
        template: 'あなたのねこ度は[list1]%です。',
        list: list,
        result: ''
    },
    methods: {
        shindan: function () {
            var random = this.random(this.list);
            this.result = this.template.replace(/\[list1\]/g, random);
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
        random: function (array) {
            return array[Math.floor(Math.random() * array.length)];
        }
        
    },

})
