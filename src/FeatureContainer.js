import React from 'react'
import "./FeatureContainer.css"
import Button from '@material-ui/core/Button';
function FeatureContainer(props) {
    return (
        <div className="Features">
            <Button variant="contained" className="Feature__Button">
            <p className="Feature__title">{props.title}</p>
            </Button>
        </div>
    )
}

export default FeatureContainer



