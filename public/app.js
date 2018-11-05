if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function () {
            console.log('SW registered');
        });
}
//instansiasi vue.js
new Vue({  
    el :'#app',
    data:{
        kodepos : [],search : '',  awal : 0, akhir : 15, halaman : 1,tampil:true
    },
    created(){
        this.getData();
        console.log(this.awal)
    },
    methods:{
        next(){
            this.awal = this.awal+=10
            this.akhir = this.akhir+=10
            this.halaman = this.halaman+=1
        },
        prev() {
            this.awal = this.awal -= 10
            this.akhir = this.akhir -= 10
            this.halaman = this.halaman -= 1
        },
        getData(){
            var kd = this;
            axios.get('https://kodepos-2d475.firebaseio.com/kota_kab/k17.json?print=pretty').then(function(response){
                kd.kodepos = response.data;
            })
        }
    },
    computed:{
        cari(){
            return this.kodepos.filter(pos =>{
                return pos.kecamatan.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
});