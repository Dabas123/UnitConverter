function UnitCategory(props) {

    let opts = [];
    Object.entries(props.units).forEach(([key, value]) => {
        opts.push(<option value={key}>{key}</option>);
    });
    
    return (
            <select id = {props.id}  
                    onChange = {(event) => props.handleChange(event)}>  
                {opts}
            </select>
            );
}


