const {createApp}=Vue

    createApp({
        data(){
            return{
                url:`https://www.themealdb.com/api/json/v1/1/search.php?f=a`,
                meals:[]

            }
        },
        methods:{
            fetchData(url){
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.meals=data.meals
                        console.log(this.comida)
                    })
            }
        },
        created(){
            this.fetchData(this.url)
        }
    })
    .mount(`#app`)
