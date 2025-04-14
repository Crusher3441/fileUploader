import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ImageDetail() {
    const { id } = useParams();
    const [imageDetail, setImageDetail] = useState(null);

    const fetchImageDetail = async () => {
        try {
            const url = `http://localhost:8080/api/images/${id}`;
            const result = await fetch(url);
            // const { data } = await result.json();
            // console.log(data);
            // setImageDetail(data);
            if (!result.ok) {
                const errorData = await result.json();
                throw new Error(errorData.message || `HTTP error! status: ${result.status}`);
              }
              
              const { data } = await result.json();
              setImageDetail(data);
        } catch (err) {
            // alert('Internal Server Error, Please try again')
            console.error('Fetch error:', err);
            alert(err.message || 'Failed to load image details');
        }
    }
    useEffect(() => {
        fetchImageDetail();
    }, [id]);

    return (
        <div className='d-flex flex-column align-items-center w-50 m-auto mt-5'>
            <Link to="/">Back To Gallary</Link>
            <h1 className='mb-4'>{imageDetail?.originalName}</h1>
            <img
                src={imageDetail?.imageURL}
                alt={imageDetail?.originalName}
                className="img-fluid"
            />
            <p><strong>Image Type : </strong> {imageDetail?.mimeType}</p>
            <p><strong>Image Size : </strong> {imageDetail?.size} bytes</p>

        </div>
    )
}

export default ImageDetail