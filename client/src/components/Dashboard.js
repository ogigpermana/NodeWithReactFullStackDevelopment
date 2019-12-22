import React, { Component } from 'react';
import { Breadcrumb, Table } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const myBtn = {
    position: "fixed",
	width: "60px",
	height: "60px",
	bottom: "40px",
	right: "40px",
	backgroundColor: "#06C",
	color: "#FFF",
	borderRadius: "50px",
	textAlign: "center",
	boxShadow: "2px 2px 3px #999"
};

const myFloat = {
    fontSize: "24px",
    marginTop: "18px"
}

class Dashboard extends Component{
    render(){
        return(
            <div style={{ paddingTop: "20px" }}>
                <Breadcrumb>
                    <Link to="/surveys">Dashboard</Link> &nbsp;/&nbsp;
                        <Breadcrumb.Item active>
                            Overview
                        </Breadcrumb.Item>
                </Breadcrumb>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
                <Link to="/surveys/new" style={myBtn}><FontAwesomeIcon icon={faPlus} style={myFloat} /></Link>
            </div>
        );
    }
}

export default Dashboard;