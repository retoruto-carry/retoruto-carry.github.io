const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const lists = [
    ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    ["ねこまんま",　"ねこじゃらし", "キャットフード", "首輪", "ダンボール"]
]

const app = new Vue({
    el: '#app',
    data: {
        template: '[名前]のねこ度は[list1]%です。お気に入りのアイテムは[list2]です。',
        list: list,
        lists: lists,
        name: '',
        result: ''
    },
    methods: {
        shindan: function () {

            this.result = this.template.replace(/\[名前]/g, this.name);
            this.replaceLists();

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
        replaceLists: function () {

            let my_chance = new Chance(this.name);

            this.lists.forEach( (row, index)  => {

                if (this.name) {
                    random = row[my_chance.natural({min: 0, max: row.length-1})];
                } else {
                    random = row[Math.floor(Math.random() * row.length)];
                }
                
                console.log(random);

                var targetStr = "\\[list" + String(index+1) + "\\]" ;
                var regExp = new RegExp(targetStr, "g" ) ;

                this.result = this.result.replace(regExp, random);

            });

        }
        
    },

})


