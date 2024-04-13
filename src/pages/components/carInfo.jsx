import React, {useState} from 'react';

const CarInfo = ({ id, image, make, model, mpg, price, seats, year }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    //toggles the cards open and closed, while also changing the icon depending on the status
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="card mt-2">
            <div className="p-2 px-4 d-flex align-items-center row">
                <h5 className="mb-0 col-10">
                        {year} {make} {model}
                </h5>
                    <button className="col btn btn-link text-end" data-target={`#${id}`} onClick={toggleCollapse} aria-expanded="true" aria-controls={id} > {isCollapsed ? <i class="fa-solid fa-circle-plus"></i> : <i class="fa-solid fa-circle-minus"></i>}
                    </button>
            </div>

            <div id={id} className={`collapse ${isCollapsed ? '' : 'show'}`} aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body d-flex justify-content-center" >
                    <div className='row w-100'>
                        <img className='col flex-grow-0 mx-auto' height="300" src={image}></img>
                        <div className='col carInfo bg-dark fw-bolder text-white fs-5 d-flex align-items-center justify-content-center flex-column'>
                            <p className='text-center mt-3'>Price: ${price}</p>
                            <p className='text-center'>{mpg} MPG</p>
                            <p className='text-center'>Seats: {seats}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;


// localhost/:1 Access to fetch at 'https://exam.razoyo.com/api/cars/wj6qg7zpt09udm1m' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

// const [isCollapsed, setIsCollapsed] = useState(true);
// const [oneCar, setOneCar] = useState(null)

// const toggleCollapse = (id) => {
//     setIsCollapsed(!isCollapsed);
//     if (!isCollapsed) {
//         return;
//     }
//     let carsURL = `https://exam.razoyo.com/api/cars/${id}`;
//     fetch(carsURL, {
//         headers: {
//             'Authorization': 'Bearer SFMyNTY.g2gDbQAAABI6OmZmZmY6MTY5LjI1NC4xLjFuBgBfMWDYjgFiAAFRgA.ORmTqIUvw1yhZxV7C-Xz522kHB5IqeKB1hPF0-D9V4k',
//             'Accept': 'application/json'
//         }
//     })
//         .then((res) => res.json())
//         .then((response) => setOneCar(response));
// };