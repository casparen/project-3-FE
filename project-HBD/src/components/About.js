import React, {Component} from 'react'
import "../styles/about.css";

class About extends Component {
    constructor() {
        super();
        this.state = {
            response: [],
            text: "",
            currentUser: ""
        };
    }//end of constructor

    render() {
        return (
            <div className="container">
                <div className="row" id="intro">
                    <h1>ABOUT</h1>
                    <p>
                      GiphyBirthday let’s you surprise your favorite people with your favorite gifs from across the web. Sign up to get in on the fun!
                    </p>
                </div>

                <div className="bio row">
                    <div className="img col-md-4 col-sm-12"><img className="img-circle"
                                                                 src="https://media.licdn.com/media/p/4/005/025/286/2b77746.jpg"
                                                                 role="presentation"/>
                    </div>

                    <div className="copy col-md-8 col-sm-12">
                        <h2>Alberto Gomez</h2> <p>Alberto Gomez is a fullstack devloper who loves finding new ways to inspire and inform others through technology and design. You can connect with him on twitter:<a href="https://www.twitter.com/albertoegomez">@albertoegomez</a></p>
                    </div>
                </div>
                <div className="bio row">
                    <div className="copy col-md-8 col-sm-12">
                        <h2>Mimi Wu</h2> <p>Mimi Wu is a Brooklyn native who finds pleasure in keeping herself busy by learning new things, traveling, hiking, coding, trying new food spots in New York City, and reading. You can find her on twitter: <a href="www.twitter.com/MisquaredWu">@MisquaredWu</a></p>
                    </div>

                    <div className="img col-md-4 col-sm-12"><img className="img-circle"
                                                                 src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAALMAAAAJGYxOTgwNDEwLTI1YzYtNDAyZi04MzViLWQ0NzRkOTU2MDczZQ.jpg"
                                                                 role="presentation"/>
                    </div>
                </div>
                <div className="bio row">
                    <div className="img col-md-4 col-sm-12"><img className="img-circle"
                                                                 src="https://media.licdn.com/media/p/8/005/0a9/2e9/3ff91cf.jpg"
                                                                 role="presentation"/>
                    </div>

                    <div className="copy col-md-8 col-sm-12">
                        <h2>Caspar Nagel</h2> <p>Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod
                        porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt
                        orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam
                        dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis
                        varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.</p>
                    </div>
                </div>
                <div className="bio row">
                    <div className="copy col-md-8 col-sm-12">
                        <h2>Harry Hur</h2> <p>Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod
                        porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt
                        orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam
                        dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis
                        varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.</p>
                    </div>

                    <div className="img col-md-4 col-sm-12"><img className="img-circle"
                                                                 src="https://pbs.twimg.com/profile_images/754417049938567168/EGzl4YPo.jpg"
                                                                 role="presentation"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
