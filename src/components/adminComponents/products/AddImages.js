import React,{useState,useEffect} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axiosInstance from '../../../axios'

function AddImages() {
    const navigate = useNavigate()
    const {slug} = useParams()
    const [count,setCount] = useState(0)
    const [image_1,setImage_1] = useState({
        btn:false,
        image:null,
        message:'Select a Image'
    })
    const [image_2,setImage_2] = useState({
        btn:false,
        image:null,
        message:'Select a Image to Upload'
    })

    const handleChange = (e)=> {
        if(e.target.name === 'image_1'){
            setImage_1({
                ...image_1,
                image:e.target.files,
                btn:true
            })
        }
        else{
            setImage_2({
                ...image_2,
                image:e.target.files,
                btn:true
            })
        }
    }
    const handleUpload = (e)=> {
        let formData = new FormData();
        formData.append('product', slug);
        formData.append('image',eval(e.target.name).image[0])
        axiosInstance.post('/admin-api/product-image',formData).then((res) => {
            console.log(res.data)
            function capitalize(s){
                return s[0].toUpperCase() + s.slice(1);
                }
            const btn = eval('set'+capitalize(e.target.name))
            btn({
                ...eval(e.target.name),
                btn:false,
                message:'Image to Uploaded Succesfully'
            })
            setCount(count+1)
        }).catch((err)=> {
            console.log(err)
        })
    }
    var finish ;
        if (count >=2){
            console.log('finish element')
            finish =  
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 justify-content-end">
                    <div className="form-group">
                        <button type="button" onClick={()=>navigate('/admin/products')}  className="btn btn-success">Finish</button>
                    </div>
                </div>
            
        }
        else{
            finish=  null
    }

    return (
        <section className="middle">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="text-start d-block">
                                <h2>Add images to Product id : {slug}</h2>
                            </div>
                        </div>
                                 
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="row align-items-center justify-content-between mb-3">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="row align-items-end justify-content-between mb-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label className="small text-dark ft-medium"><i className="ti-cloud-up"></i> Image 1</label>
                                        <input type="file" onChange={handleChange} className="form-control" name='image_1'  accept="image/*"/>
                                    </div>
                                </div>
                                {
                                    image_1.btn?
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 justify-content-end">
                                    <div className="form-group">
                                        <button type="button" name='image_1' onClick={handleUpload} className="btn btn-success">Upload</button>
                                    </div>
                                </div>
                                :
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 justify-content-end">
                                    <div className="form-group">
                                        <h3>{image_1.message}</h3>
                                        
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="row align-items-end justify-content-between mb-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label className="small text-dark ft-medium"><i className="ti-cloud-up"></i> Image 2</label>
                                        <input type="file" onChange={handleChange}  className="form-control" name='image_2'  accept="image/*"/>
                                    </div>
                                </div>
                                {
                                    image_2.btn?
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 justify-content-end">
                                    <div className="form-group">
                                        <button type="button" onClick={handleUpload} name='image_2' className="btn btn-success">Upload</button>
                                    </div>
                                </div>
                                :
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 justify-content-end">
                                    <div className="form-group">
                                        <h3>{image_2.message}</h3>
                                        
                                    </div>
                                </div>
                                }
                            </div>
                            {finish}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AddImages

