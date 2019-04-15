// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';

// import DeleteModel from './DeleteModel/DeleteModel.jsx';
// import AddEditModel from './AddEditModel/AddEditModel.jsx';

// export default class Modal extends React.Component {
    
//     constructor(props) {
//         super(props);

//         const currentStore = window.store;

//         this.model = null;

//         if (this.props.value == "Delete") {
//             this.model = <DeleteModel
//                 movie={this.props.movie}
//                 handleClose={this.handleClose}
//             />
//         } else if (this.props.value == "Edit") {
//             this.model = <AddEditModel
//                 movie={this.props.movie}
//                 handleClose={this.handleClose}
//             />
//         }
//     }

//     state = {
//         open: false,
//     };

//     handleClickOpen = () => {
//         this.setState({ open: true });
//     };

//     handleClose = () => {
//         this.setState({ open: false });
//     };


//     render() {
//         return (
//             <div>
//                 <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//                     {this.props.value}
//                 </Button>
//                 <Dialog
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     aria-labelledby="form-dialog-title"
//                 >
//                 {this.model}
//                 </Dialog>
//             </div>
//         );
//     }
// }