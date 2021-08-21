import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import fitness1 from "../asserts/fitness1.jpg";
import fitness2 from "../asserts/fitness2.jpg";
import fitness3 from "../asserts/fitness3.jpg";
import heading1 from "../asserts/Heading1.jpg";
import heading2 from "../asserts/Heading2.jpg";
import heading3 from "../asserts/Heading3.jpg";
const Home=()=>{
    return(
        <>
        <Carousel >
        <Carousel.Item>
          <img
            className="a-block w-100"
            src={fitness1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="b-block w-100"
            src={fitness2}
            alt="Second slide"
            style={{ width: "500px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c-block w-100"
            src={fitness3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div className="container marketing">

        {// <!-- Three columns of text below the carousel -->
        }
        <div className="row">
          <div className="col-lg-4">
            <img src={heading1} className="img-thumbnail" alt="..." />

            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a className="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div className="col-lg-4">
            <img src={heading2} className="img-thumbnail" alt="..." />

            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div className="col-lg-4">
            <img src={heading3} className="img-thumbnail" alt="..." />

            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//</div><!-- /.col-lg-4 -->
          }
        </div>


        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img src={fitness3} className="img-thumbnail" alt="..." />

          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={fitness3} className="img-thumbnail" alt="..." />

          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div className="col-md-5">
            <img src={fitness3} className="img-thumbnail" alt="..." />

          </div>
        </div>

        <hr className="featurette-divider"></hr>

        {//<!-- /END THE FEATURETTES -->
        }

      </div>
        </>
    )
}

export default Home;