function App(props) {

    const unitsData = {
        temperature: {
            name: "Temperature",
            units: {
                celsius: {
                    name: "Celsius",
                    symbol: "°C",
                    convToBase: (val) => val,
                    convFromBase: (val) => val
                },
                fharenheit: {
                    name: "Fharenheit",
                    symbol: "°F",
                    convToBase: (val) => (val - 32) / 1.8,
                    convFromBase: (val) => val * 1.8 + 32
                }
            }
        },
        volume: {
            name: "Volume",
            units: {
                liter: {
                    name: "Liter",
                    symbol: "l",
                    convToBase: (val) => val,
                    convFromBase: (val) => val
                },
                milliliter: {
                    name: "Milliliter",
                    symbol: "ml",
                    convToBase: (val) => val / 1000,
                    convFromBase: (val) => val * 1000
                },
                centiliter: {
                    name: "Centiliter",
                    symbol: "l",
                    convToBase: (val) => val / 100,
                    convFromBase: (val) => val * 100
                },
                deciliter: {
                    name: "Deciliter",
                    symbol: "dl",
                    convToBase: (val) => val / 10,
                    convFromBase: (val) => val * 10
                }
            }
        },
        length: {
            name: "Length",
            units: {
                meter: {
                    name: "Meter",
                    symbol: "m",
                    convToBase: (val) => val,
                    convFromBase: (val) => val
                },
                kilometer: {
                    name: "Kilometer",
                    symbol: "km",
                    convToBase: (val) => val * 1000,
                    convFromBase: (val) => val / 1000
                },
                foot: {
                    name: "Foot",
                    symbol: "ft",
                    convToBase: (val) => val * 0.3048,
                    convFromBase: (val) => val / 0.3048
                },
                mile: {
                    name: "Mile",
                    symbol: "mi",
                    convToBase: (val) => val * 1609.344,
                    convFromBase: (val) => val / 1609.344
                }
            }
        }
    };

    const [resultText, setResultText] = React.useState("0");
    const [category, setCategory] = React.useState(Object.keys(unitsData)[0]);

    React.useEffect(() => {
        document.getElementById("category").value = Object.keys(unitsData)[0];
    }, []);

    function handleChangeCategory(e) {
        let name = e.target.options[e.target.selectedIndex].innerText;
        let category;
        Object.entries(unitsData).forEach(([key, value]) => {
            if (unitsData[key].name === name) {
                category = key;
        }
        });
        setCategory(category);
    }

    function convert() {
        let id_quantity = document.getElementById("quantity");
        let id_category = document.getElementById("category");
        let id_unit_1 = document.getElementById("unit1");
        let id_unit_2 = document.getElementById("unit2");

        let quantity = Number(id_quantity.value);
        let unit_1 = unitsData[id_category.value].units[id_unit_1.value];
        let unit_2 = unitsData[id_category.value].units[id_unit_2.value];
        let temp_r = unit_1.convToBase(quantity);
        temp_r = unit_2.convFromBase(temp_r);
        temp_r = Math.round((temp_r + Number.EPSILON) * 1000) / 1000;
        setResultText(quantity + unit_1.symbol + " = " + temp_r + unit_2.symbol);
    }

    return (
            <div className="app-main">
                <label id="caption">Unit Converter</label>
                <div>
                    <label>Category</label>
                    <UnitCategory id="category" units = {unitsData}  
                                  handleChange={handleChangeCategory}/>
                </div>
                <div>
                    <label>Quantity</label>
                    <input id="quantity" type="number"/>                    
                </div>
                <div>
                    <label>Source unit</label>
                    <UnitList id="unit1" units = {unitsData} 
                              category = {category}/>
                    <label>Destination unit</label>
                    <UnitList id="unit2" units = {unitsData} 
                              category = {category}/>
                </div>
                <div>
                    <button id="resultbtn" onClick={() => convert()}>Convert</button>
            
                </div>
                <div>
                    <label>Result</label>
                    <input id="result" readOnly={true} value={resultText}/>
                </div>
            </div>
            );
}



