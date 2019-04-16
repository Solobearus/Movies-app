import React from 'react'
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const DeleteModel = (props) => {
    return (
        <React.Fragment>
            <DialogTitle id="form-dialog-title">Delete {props.movie.Title}?</DialogTitle>
            
            <DialogActions>
                <Button onClick={() => {props.handleClose()}} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => { props.click(props.movie.imdbID); props.handleClose(); }} color="primary">
                    Delete
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default DeleteModel
