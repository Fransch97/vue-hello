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
        getTime(){
            const time = new Date();
                let h = time.getHours()
                let m = time.getMinutes()
                let s = time.getSeconds()
                const theRealtime = `${(h < 10)? "0" + h: m} : ${(m < 10)? "0" + m: m} : ${(s < 10)? "0" + s : s}`
                return theRealtime
        },

        timeInterval(){
            this.watchRealtime = setInterval(()=>{
                
                this.watchTime = this.getTime()
                
            },1000)
        },
        watch(){
            this.watchTime = this.getTime()
            if(this.showTime === false){
                this.showTime = true
                this.btnMessage = "Hide Watch"
                this.timeInterval()
            }else{
                this.showTime = false
                clearInterval(this.watchRealtime)
                this.watchTime = ""
                this.btnMessage = "show time"

            }
                

           
        }
    },
}
)