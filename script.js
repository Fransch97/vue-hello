console.log("working")

const app = new Vue({
    el: '#app',

    data :{
        message :"Hello Vue.js",
        btnMessage: "show time",
        showTime: false,
        watchTime: ""
    },

    methods: {
        


        timeInterval(){
             setInterval(()=>{
                const time = new Date();
                let h = time.getHours()
                let m = time.getMinutes()
                let s = time.getSeconds()
                this.watchTime = 
                `${(h < 10)? "0" + h: m} : ${(m < 10)? "0" + m: m} : ${(s < 10)? "0" + s : s}`
            },1000)
        },
        watch(){
                this.timeInterval()

           
        }
    },
}
)