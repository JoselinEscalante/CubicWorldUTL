const app=new Vue({
	el:"#bebids",
	data:{
		Name:'',
		Ingredients:'',
		Size:'',
		Price:'',
		Stock:'',
		bebidas:[
			{nombre: "Café",
			 ingrediente: "Leche",
			 tamaño: "Mediano",
			 precio: "$35",
			 status: true},

			{nombre: "Frappe",
			 ingrediente: "Oreo",
			 tamaño: "Grande",
			 precio: "$65",
			 status: true},

			 {nombre: "Licuado",
			 ingrediente: "Proteina",
			 tamaño: "Chico",
			 precio: "$22",
			 status: false},

			 {nombre: "Batido",
			 ingrediente: "Capuccino",
			 tamaño: "Mediano",
			 precio: "$70",
			 status: true},

			 {nombre: "Expresso",
			 ingrediente: "Agua",
			 tamaño: "Grande",
			 precio: "$98",
			 status: true},

			{nombre: "Té verde",
			 ingrediente: "Agua",
			 tamaño: "Mediano",
			 precio: "$18",
			 status: true},

			 {nombre: "Jugo Tropical",
			 ingrediente: "Fresa",
			 tamaño: "Chico",
			 precio: "$40",
			 status: true},

			 {nombre: "Refresco",
			 ingrediente: "Mandarina",
			 tamaño: "Grande",
			 precio: "$21",
			 status: false},

			 {nombre: "Lechita",
			 ingrediente: "Chocolate",
			 tamaño: "Chico",
			 precio: "$6",
			 status: true},
		],
		busqueda:'',
		minimo:0,
	},
	methods:{
		agregar: function(){
			if(this.Name){
				this.bebidas.push({nombre:this.Name, ingrediente:this.Ingredients, tamaño:this.Size, precio:this.Price, status:this.Stock});
				this.Name='';
			}
			if(this.Ingredients){
				this.bebidas.push({ingrediente:this.Ingredients});
				this.Ingredients='';
			}
			if(this.Size){
				this.bebidas.push({tamaño:this.Size});
				this.Size='';
			}
			if(this.Price){
				this.bebidas.push({precio:this.Price});
				this.Price='';
			}
			if(this.Stock){
				this.bebidas.push({status:this.Stock});
				this.Stock='';
			} 
		}
	},

	computed:{
		lasbebidas(){
			return this.bebidas.filter((beb)=>beb.precio.includes(this.minimo));
		},
		buscarBebida(){
			return this.bebidas.filter((beb)=>beb.nombre.includes(this.busqueda));
		},
		bebidaEncontradas(){
			return this.buscarBebida.length;
		}

	}
});