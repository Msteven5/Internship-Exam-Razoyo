import React, {useState} from 'react';

const CarInfo = ({ id, image, make, model, mpg, price, seats, year }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="card w-100 mt-2">
            <div className="p-2 px-4 d-flex align-items-center row">
                <h5 className="mb-0 col-10">
                        {year} {make} {model}
                </h5>
                    <button className="col btn btn-link text-end" data-target={`#${id}`} onClick={toggleCollapse} aria-expanded="true" aria-controls={id} > {isCollapsed ? <i class="fa-solid fa-circle-plus"></i> : <i class="fa-solid fa-circle-minus"></i>}
                    </button>
            </div>

            <div id={id} className={`collapse ${isCollapsed ? '' : 'show'}`} aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body d-flex justify-content-center">
                    <div className='row w-100'>
                        <img className='col' height="300" src={image}></img>
                        <div className='col bg-dark fw-bolder text-white fs-5 d-flex align-items-center justify-content-center flex-column' id="carInfo">
                            <p>Price: ${price}</p>
                            <p>{mpg} MPG</p>
                            <p>Seats: {seats}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;