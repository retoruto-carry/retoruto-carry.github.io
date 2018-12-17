class Random {
    constructor(seed = 88675123) {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
        this.w = seed;
    }

    // XorShift
    next() {
        let t;

        t = this.x ^ (this.x << 11);
        this.x = this.y; this.y = this.z; this.z = this.w;
        return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8)); 
    }

    // min以上max以下の乱数を生成する
    nextInt(min, max) {
        const r = Math.abs(this.next());
        return min + (r % (max + 1 - min));
    }
}

//const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const list = [10, 20, 30]

const app = new Vue({
    el: '#app',
    data: {
        template: 'あなたのねこ度は[list1]%です。',
        list: list,
        name: '',
        result: ''
    },
    methods: {
        shindan: function () {
            let random = this.random(this.list, this.name);
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
        random: function (array, name) {
            let seed = 954564;
            let random = new Random(seed);
            let index = random.nextInt(0,array.length-1);
            console.log("index: " + index);
            return array[index];
        }
        
    },

})


