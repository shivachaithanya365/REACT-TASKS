import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure this import is here

export default class DemoCarousel extends Component {
    render() {
        return (
            <div style={{ height: '300px', maxWidth: '800px', margin: 'auto' }}>
                <Carousel style={{ height: '100%' }}>
                    <div>
                        <img src="https://media.licdn.com/dms/image/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=txL8oZw9vpsEAev7vCuRj8GQpDmbmG9FMUnRDtRzXaY" alt='img1' />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/06/What-is-React.jpg" alt='img2' />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://media.wired.com/photos/65e83cc9b8ffa5f8fa84c893/master/w_1920,c_limit/wired-uk-google-watching.jpg" alt='img3' />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}
