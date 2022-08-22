function App(props) {

    const unitList = {
        Temperature: {
            Celsius: {Base: true},
            Fharenheit: {
                ConvToBase: (val) => (val - 32) / 1.8,
                ConvFromBase: (val) => val * 1.8 + 32
            }
        },
        Speed: {
            Kilometer: {Base: true},
            Mile: {
                ConvToBase: (val) => val / 0.62137,
                ConvFromBase: (val) => val * 0.62137
            }
        }
    };

    const [result, setResult] = React.useState(0);
    const [category, setCategory] = React.useState(Object.keys(unitList)[0]);

    React.useEffect(() => {
        document.getElementById("category").value = Object.keys(unitList)[0];        
    }, []);

    function handleChangeCategory(e) {
        setCategory(e.target.options[e.target.selectedIndex].innerText);
    }

    function convert() {
        let id_category = document.getElementById("category");
        let id_unit_1 = document.getElementById("unit1");
        let id_unit_2 = document.getElementById("unit2");
        unit_1 = unitList[id_category.value];
    }

    return (
            <div className="app-main">
                <div>
                    <UnitCategory id="category" units = {unitList}  
                                  handleChange={handleChangeCategory}/>
                </div>
                <div>
                    <input id="quantity" type="number"/>                    
                </div>
                <div>
                    <UnitList id="unit1" units = {unitList} 
                              category = {category}/>
                    <button onClick={() => convert()}>Convert to</button>
                    <UnitList id="unit2" units = {unitList} 
                              category = {category}/>
                </div>
            </div>
            );
}



