import React from 'react';
import MetaTags from 'react-meta-tags';

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import {
    Container,
} from "reactstrap";

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                <title>Franchise sale Chart| FoodERP-React FrontEnd</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;