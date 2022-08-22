function UnitList(props) {
    let opts = [];
    Object.entries(props.units[props.category]).forEach(([key, value]) => {
            opts.push(<option value={key}>{key}</option>);
        });
    
    return (
            <select id={props.id}>  
                {opts}
            </select>
            );

}


