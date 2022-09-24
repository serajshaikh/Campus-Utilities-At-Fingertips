import React,{useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import './Admin.css';
import {Link} from 'react-router-dom';
import {getPosts} from '../actions/maintenance';
import {getTransport} from '../actions/transport';
import maintenance from '../images/maintain2.jpg'

const Admin = () => {
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(getPosts());
        dispatch(getTransport());
    },[dispatch])
   
    const posts = useSelector((state)=>state.postss);

    const transport = useSelector((state)=>state.posts);


 
   
   
   
    return (
        <>
        <div className="col-md-12">
            <h1 className="display"></h1>
            <h1 className="display"></h1>
        </div>
        

        <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="sidenav">
                    <Link className="link_item" style={{display:""}}>Canteen</Link>
                    <img className="side_image" src={maintenance}/>
                    <Link className="link_item" style={{display:""}}>Library</Link>
                    <img className="side_image" src={maintenance}/>
                    <Link className="link_item" style={{display:""}}>Health</Link>
                    <img className="side_image" src={maintenance}/>
                    <Link className="link_item" style={{display:""}}>ClassRoom</Link>
                    <img className="side_image" src={maintenance}/>
                    <Link className="link_item" style={{display:""}}>Transport</Link>
                    <img className="side_image" src={maintenance}/>
                    <Link className="link_item" style={{display:""}}>Maintenance</Link> 
                    <img className="side_image" src={maintenance}/>
                </div>
            </div>
            <div className="col-md-8 right-table">
                <h1 className="dis">Maintenance</h1>
                <div className="table tbale-stripted">
                    <thead>
                        <tr>
                            <th>Student Reg</th>
                            <th>Building</th>
                            <th>Building_Loaction</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                        <tbody>
                     <tr>
                     <td>
                         <input type="text"/>
                     </td>
                     <td>
                         <input type="text"/>
                     </td>
                     <td>
                         <input type="text" />
                     </td>
                     <td>
                         <input type="text" />
                     </td>
                     </tr>
         </tbody>                   
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Admin
