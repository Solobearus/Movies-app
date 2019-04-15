import React from 'react'
import style from './AddEditModel.module.css'
import Button from '@material-ui/core/Button';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
const AddEditModel = (props) => {
    return (
        <React.Fragment>
            <DialogTitle id="form-dialog-title"> Editing {props.movie.Title}</DialogTitle>

            <DialogActions>
                <Button onClick={() => {this.props.handleClose()}} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => { props.click(props.movie.imdbID) }} color="primary">
                    Update
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default AddEditModel
