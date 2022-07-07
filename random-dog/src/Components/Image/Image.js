const Image = (props) => {
    return (
        <img className={props.className}
                 width={props.width}
                height={props.height}
                src={props.src}
                alt={props.alt}
        />
    );
}

export default Image;