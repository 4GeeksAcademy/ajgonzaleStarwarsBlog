const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList : [],
			vehiclesList : [],
			planetsList : [],
			favorites : [],
			favIndex : new Map(),
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites: (index, name) => {
				const store = getStore();
				
				let favIndexAux = store.favIndex;
				let auxList = [];

				switch (index[0]) {
					case 'c' : 
						auxList = store.characterList;
						store.characterList[index[1]].favorite == true ? auxList[index[1]].favorite = false : auxList[index[1]].favorite = true;
						setStore({ characterList : auxList})
						break;
					case 'v' :
						auxList = store.vehiclesList;
						store.vehiclesList[index[1]].favorite == true ? auxList[index[1]].favorite = false : auxList[index[1]].favorite = true;
						setStore({ vehiclesList : auxList})
						break;
					case 'p' :
						auxList = store.planetsList;
						store.planetsList[index[1]].favorite == true ? auxList[index[1]].favorite = false : auxList[index[1]].favorite = true;
						setStore({ planetsList : auxList})
						break;
				}

				if (favIndexAux.has(index)) {
					let aux = store.favorites
					aux = aux.filter(function (value) {
						return value.index !== index;
					});
					setStore({ favorites : aux})
					favIndexAux.delete(index)
				} else {
					let fab = {'index' : index, 'name' : name}
					setStore({ favorites : [...store.favorites, fab]})
					favIndexAux.set(index, name);
				}  
				setStore({ favIndex : favIndexAux})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacterList : () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people/?format=json").then((res) => {
					return res.json();
				  })
				  .then(data => { 
					let aux = data.results.map((item) => {
						item['favorite'] = false;
						return item;
					})
					setStore({ characterList : aux});
				  })
			},
			getVehiclesList : () => {
				const store = getStore();
				fetch("https://swapi.dev/api/vehicles/?format=json").then((res) => {
					return res.json();
				  })
				  .then(data => { 
					let aux = data.results.map((item) => {
						item['favorite'] = false;
						return item;
					})
					setStore({ vehiclesList : aux });
				  })
			},
			getPlanetsList : () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/?format=json").then((res) => {
					return res.json();
				  })
				  .then(data => { 
					let aux = data.results.map((item) => {
						item['favorite'] = false;
						return item;
					})
					setStore({ planetsList : aux });
				  })
			},
		}
	};
};

export default getState;
