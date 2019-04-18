import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DeleteModel from './DeleteModel/DeleteModel.jsx';
import EditModel from './EditModel/EditModel.jsx';
import AddModal from './AddModal/AddModal.jsx';

export default class Modal extends React.Component {
    
    constructor(props) {
        super(props);
        this.model = null;
    }

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        // Awesome shorter version of handling which modal to show.
        const modalProps = { click: this.props.click, movie: this.props.movie, handleClose: this.handleClose };
        switch (this.props.value) {
            case "Delete": this.model = <DeleteModel {...modalProps} />; break;
            case "Edit": this.model = <EditModel {...modalProps} />; break;
            case "Add": this.model = <AddModal {...modalProps} />; break;
        }
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    {this.props.value}
                </Button>
                <Dialog
                    open={this.state.open}
                    aria-labelledby="form-dialog-title"
                >
                    {this.model}
                </Dialog>
            </div>
        );
    }
}