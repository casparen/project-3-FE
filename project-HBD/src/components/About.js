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
                        <h2>Alberto Gomez</h2> <p>Alberto is a full stack devloper who loves finding new ways to inspire and inform others through technology and design. You can connect with him on twitter:<a href="https://www.twitter.com/albertoegomez">@albertoegomez</a></p>
                    </div>
                </div>
                <div className="bio row">
                    <div className="copy col-md-8 col-sm-12">
                        <h2>Mimi Wu</h2> <p>A Brooklyn native, Mimi is a full stack web developer who other than coding, finds pleasure in keeping herself busy by learning new things, traveling, hiking, trying new food spots in New York City, and reading. You can find her on twitter: <a href="www.twitter.com/MisquaredWu">@MisquaredWu</a></p>
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
                        <h2>Caspar Nagel</h2> <p>Caspar is a driven Industrial Designer/Web-developer, who is passionate about creating products that impact lives globally. Combining traditional ways of crafting products/objects with modern computer science to create unique products. Feel free to check out his portfolio at http://casparnagel.myportfolio.com and email him at casparen@googlemail.com</p>
                    </div>
                </div>
                <div className="bio row">
                    <div className="copy col-md-8 col-sm-12">
                        <h2>Harry Hur</h2> <p>Harry is a full stack developer/entrepreneur from Brooklyn. He specializes in front-end javascript framework such as React and Anglular 2. You can reach him at: harrythedev@gmail.com</p>
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
