import React from 'react'
import { Carousel } from 'react-bootstrap'

class OurCarousel extends React.Component {
    render() {
        return (
            <Carousel classname="TheCarousel">
                <Carousel.Item>
                    <img
                        // classname="forceSize"
                        className="d-flex w-100"
                        src="https://media-exp1.licdn.com/dms/image/C4D12AQGu2HBj-CPySA/article-cover_image-shrink_600_2000/0?e=1611187200&v=beta&t=LZmeD4dM8FMsVyDhD5kgZYepMs8CQquOhBGQ85j9DL0"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ever wonder how long it will take to finish a book?</h3>
                        <p>Well not anymore!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // classname="forceSize"
                        className="d-flex w-100"
                        src="https://miro.medium.com/max/3200/1*H7snixoePzXlODi_nR6RfA.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Never leave a book unread again</h3>
                        <p>Start clearing your book shelf knowing exactly how long it will take.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // classname="forceSize"
                        className="d-flex w-100"
                        src="https://www.phocusonlifestyle.org/app/uploads/2018/12/books-1204029_1920-1600x600.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Log your time</h3>
                        <p>Contribute to our site by logging how long it took you to finish a book.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}


export default OurCarousel