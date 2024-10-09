
export function Navlinks(props) {
    return (
        <>
            <div className="Navlink-wrapper">
                <div className="navlink-upper">
                    <div className="link-left">
                        <img className='ddd' src={props.img} alt="Navlink icon" />
                        <p>{props.heading}</p>
                    </div>
                    <div className="link-right">
                        <p>{props.btn}</p>
                    </div>
                </div>
                <div className="navlink-lower">
                    <p>{props.subheading}</p>
                </div>
            </div>
        </>
    );
}

