import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axiosInstance from '../../../axios'
import {setSnackbar} from '../../../features/ducks/snackbar'
import {useDispatch} from 'react-redux'

function AdminProductAdd() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [form,setForm] = useState({
        loading: false,
        data:null
    })
    const initialValues = Object.freeze({
        product_name:'',
        category:'',
        gender:'',
        brand:'',
        price:'',
        offer_percentage:'',
        offer_price:'',
        stock:'',
        size_type:'',
        description:'',
        slug:'',
        images:[],
    })
    const [values,updateValues] = useState(initialValues)
    useEffect(() => {
            setForm({
                ...form,
                loading: true
            })
        axiosInstance.options('/admin-api/products/').then((res)=>{
            setForm({
                ...form,
                loading: false,
                data:res.data.actions.POST
            })
        })
    },[])
    const handleChange = (e)=>{
        updateValues({
            ...values,
            [e.target.name]: e.target.value,
            slug:((
                values.gender+'-'+values.category+'-'+values.brand+'-'+values.product_name
                ).toLowerCase()).replace(/\s/g,'-')
        })
    }
    const handleSubmit = (e)=>{
        console.log(values)
        e.preventDefault()
        axiosInstance.post('/admin-api/products/',values).then((res) =>{
            navigate('/admin/products/add-image/'+res.data.id)
        }).catch((err) =>{
            dispatch(
                setSnackbar(
                    true,
                    'error',
                    'something error'
                )
            )
        })
    }
    if (form.loading) return 'loading'
    if (form.data === null) return 'Can\'t find form'
    return (
        <section className="middle">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="text-start d-block">
                                <h2>Add Products</h2>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                            <div className="form-group">
                                <Link to="/admin/products/" className="btn btn-outline-danger">Cancel</Link>
                            </div>
                        </div>          
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <form className="row m-0">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Product Name *</label>
                                <input type="text" onChange={handleChange} className="form-control" name='product_name' value={values.product_name} />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Category *</label>
                                <select  onChange={handleChange} type="text" className="custom-select form-control" name='category' >
                                    <option value={initialValues.category}>-----------------------------</option>
                                    {
                                        form.data.category.choices && form.data.category.choices.map((item) => {
                                            return <option value={item.value}>{item.display_name}</option>;
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Gender *</label>
                                <select type="text" onChange={handleChange} className="custom-select form-control" name='gender' >
                                    <option value={initialValues.gender}>-----------------------------</option>
                                    {
                                        form.data.gender.choices && form.data.gender.choices.map((item) => {
                                            return <option value={item.value}>{item.display_name}</option>;
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Brand *</label>
                                <select type="text" onChange={handleChange} className="custom-select form-control" name='brand' >
                                    <option value={initialValues.brand}>----------------------------------</option>
                                    <option value='lwis'>lwis</option>
                                    <option value='Levis'>Levis</option>
                                    <option value='moda'>moda</option>
                                    <option value='GAP'>GAP</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Price *</label>
                                <input type="number" onChange={handleChange} className="form-control" name='price' />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Offer percentage%</label>
                                <input type="number" onChange={handleChange} className="form-control" name='offer_percentage' />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Offer Price </label>
                                <input type="number" onChange={handleChange} className="form-control" name='offer_price' />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="row justify-content-center">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="small text-dark ft-medium">Stock *</label>
                                        <input type="number" onChange={handleChange} className="form-control" name='stock' />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="small text-dark ft-medium">Size type *</label>
                                        <select type="text" onChange={handleChange} className="custom-select form-control" name='size_type' >
                                            <option value={initialValues.size_type}>----------------------------------</option>
                                            <option value='AAA'>AAA</option>
                                            <option value='BBB'>BBB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Description </label>
                                <textarea  name='description' onChange={handleChange} className="form-control ht-80" value={values.description}/>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Slug</label>
                                <input type="text" disabled className="form-control" name='slug'  value={values.slug}/>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 justify-content-end">
                            <div className="form-group">
                                <button type="button" onClick={handleSubmit} className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AdminProductAdd
