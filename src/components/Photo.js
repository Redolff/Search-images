import '../style/Photo.css'

const Photo = ({ photo }) => {
    
    const open = (urls) => {
        window.open(urls)
    }

    return (
        <article onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <p> {[photo.description, photo.alt_description].join(' - ')} </p>
        </article>
    )
}

export default Photo