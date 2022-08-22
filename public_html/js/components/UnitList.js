function UnitList(props) {
    let opts = [];
    Object.entries(props.units[props.category].units).forEach(([key, value]) => {
        opts.push(<option value={key}>
            {props.units[props.category].units[key].name}
        </option>);
    });

    return (
            <select id={props.id}>  
                {opts}
            </select>
            );

}


