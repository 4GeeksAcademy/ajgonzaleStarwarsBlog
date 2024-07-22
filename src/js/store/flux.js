const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList : [],
			vehiclesList : [],
			planetsList : [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
					setStore({ characterList : data.results});
				  })
			},
			getVehiclesList : () => {
				const store = getStore();
				fetch("https://swapi.dev/api/vehicles/?format=json").then((res) => {
					return res.json();
				  })
				  .then(data => { 
					setStore({ vehiclesList : data.results });
				  })
			},
			getPlanetsList : () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/?format=json").then((res) => {
					return res.json();
				  })
				  .then(data => { 
					setStore({ planetsList : data.results });
				  })
			},
		}
	};
};

export default getState;
