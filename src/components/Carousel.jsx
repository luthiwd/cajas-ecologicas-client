import React from 'react'

function Carousel() {

  return (

    <div className='containerCarousel'>
      <div>
        <h4 className="textofoto">Lo que sea</h4>
      </div>
        <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel2_we0fr6.jpg"
                className="block w-full"
                alt="Campo de trigo"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel3_jt7fwx.jpg"
                className="block w-full"
                alt="Cajas de comida"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carrousel1_mlrpe8.jpg"
                className="block w-full"
                alt="Cultivos"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://res.cloudinary.com/dikww9ljc/image/upload/v1654429191/carousel/carousel4_u3wqsw.jpg"
                className="block w-full"
                alt="Productos ecologicos"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
     </div>
  )
}

export default Carousel