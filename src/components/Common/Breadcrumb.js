import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { Row, Col } from "reactstrap"
import { Redirect } from "react-router-dom";
import { Search } from "react-bootstrap-table2-toolkit";

const Breadcrumb = props => {

  const { SearchBar } = Search;

  const [IsRedirectNewButton, setIsRedirectNewButton] = useState(false);

  // New Button Handller
  const NewButtonHandeller = () => {
    setIsRedirectNewButton(true)
  }

  // Onfocus Search Box
  useEffect(() => {
    if (!(props.breadcrumbCount === undefined)) {
      document.getElementById("search-bar-0").focus();
    }
  }, [])

  return (
    <Row xs="12">
      <Col md={4}>
        <div className="mb-3 text-left">
          {props.IsButtonVissible ? <button type="button" className="btn btn-success"
            data-mdb-toggle="tooltip" data-mdb-placement="top" title="Create New"
            onClick={() => { NewButtonHandeller() }} >
            New
          </button> :
            <></>}
          <h4 className="font-size-18  col-ls-6 col-form-label">{props.breadcrumbItem}</h4>
        </div>
      </Col>
      <Col md={5}>
      </Col>
      <Col md={2} className="text-right">
      <div className="mb-3">
          <div className="search-box d-inline-block">
            <div className="position-relative">
              {(props.IsButtonVissible || props.IsSearch === true) ? <><SearchBar {...props.SearchProps} />
                <i className="bx bx-search-alt search-icon-search" />
              </> : <></>
              }
            </div>
          </div>
        </div>
      </Col>
      <Col md={1} className="text-right">
        {
          !(props.breadcrumbCount === undefined) ?
            <div className="bg-soft-success text-center text-danger external-event col-ls-6 col-form-label"  
            >
              Count : &nbsp;(&nbsp; {props.breadcrumbCount}&nbsp;)
            </div>
            :
            <></>
        }
      </Col>
      {/* Redirct To master Component  */}
      {(IsRedirectNewButton) ? <Redirect to={{ pathname: props.RedirctPath }} /> : null}
    </Row>
    
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}
export default Breadcrumb
