const lists = [
    {
        id: 1,
        name: "userA",
        message: "テストメッセージ1"
    },
    {
        id: 2,
        name: "userA",
        message: "テストメッセージ2"
    }
];

var app = new Vue({
    el: '#app',
    data: {
        result: ''
    },
    methods: {
        shindan: function () {
            this.result = "診断結果です";
        },
        tweet: function () {
            let shareURL =  "https://twitter.com/share?url=https://retoruto-carry.github.io/shindan.html&text=%3e%3e%20あなたのねこ度がわかるボタン";
            window.open(shareURL);

        }
    },

})
