import React, {Component} from 'react'
// import DashboardList from './DashboardList';
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget sollicitudin purus. Vivamus non massa eu lacus vulputate finibus vel a est. Aenean vitae molestie dolor. Cras efficitur a magna non sodales. Morbi lacus turpis, ultricies ut ipsum eget, accumsan efficitur massa. Phasellus eu dapibus lacus. Maecenas facilisis aliquam eros et faucibus. Cras ultrices hendrerit egestas. Fusce sed tristique magna. Integer varius nibh ac tortor egestas sagittis. Fusce imperdiet lobortis vulputate.

                Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.
                </p>
                </div>

                {/*Bio 1 */}
                <div className="bio row" >
                <div className="img col-md-4 col-sm-12"> <img className= "img-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Bio&w=200&h=200"/>
                </div>

                <div className="copy col-md-8 col-sm-12">
                  <h2>Alberto</h2> <p>Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.</p>
                  </div>
                </div>
                {/*End Bio 1 */}
                {/*Bio 2 */}
                <div className="bio row" >
                <div className="copy col-md-8 col-sm-12">
                  <h2>Alberto</h2> <p>Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.</p>
                  </div>

                  <div className="img col-md-4 col-sm-12"> <img className= "img-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Bio&w=200&h=200"/>
                  </div>
                </div>
                {/*End Bio 2 */}
                {/*Bio 3 */}
                <div className="bio row" >
                <div className="img col-md-4 col-sm-12"> <img className= "img-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Bio&w=200&h=200"/>
                </div>

                <div className="copy col-md-8 col-sm-12">
                  <h2>Alberto</h2> <p>Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.</p>
                  </div>
                </div>
                {/*End Bio 3 */}
                {/*Bio 4 */}
                <div className="bio row" >
                <div className="copy col-md-8 col-sm-12">
                  <h2>Alberto</h2> <p>Nam quis urna sit amet nulla eleifend suscipit. Sed blandit quam eu euismod porttitor. Nullam quis tellus tortor. Suspendisse potenti. Praesent sed enim mi. Cras tincidunt orci vitae tortor convallis ultricies. Praesent rhoncus nulla lectus, sit amet pharetra quam dignissim vulputate. Etiam volutpat odio ac posuere aliquet. Nullam sit amet quam nec felis varius imperdiet. Maecenas commodo augue cursus arcu vulputate egestas.</p>
                  </div>

                  <div className="img col-md-4 col-sm-12"> <img className= "img-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Bio&w=200&h=200"/>
                  </div>
                </div>
                {/*End Bio 4 */}
            </div>
        )
    }
}

export default About;
