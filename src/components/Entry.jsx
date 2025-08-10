export default function Entry(props){
    const BASE_URL = import.meta.env.BASE_URL;
    return(
        <>
            <article className="journal-entry">
                <div className="main-image-container">
                    <img className="main-image" src={props.img.src} alt={props.img.alt} />
                </div>
                <div className="journal-entry-text">
                    <div>
                        <img src={`${BASE_URL}src/assets/pointer.png`} alt="Description" />
                        <span>{props.country}</span>
                        <a href={props.googleMaps}>view on Google Maps</a>
                    </div>
                    <h2>{props.place}</h2>
                    <hr className="mtji" />
                    <p>{props.days}</p>
                    <p>{props.description}</p>
                </div>
            </article>
            <hr className="hr" />
        </>
    )
}
