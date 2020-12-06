function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""} justify-content-center`}>{props.children}</div>;
}

export default Row;
