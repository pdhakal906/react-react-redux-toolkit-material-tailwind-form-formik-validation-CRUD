import React from 'react'
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';

import { deleteInfo } from '../features/infoSlice';



const Dialogue = ({ id }) => {

  const dispatch = useDispatch()



  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);



  }

  const handleDelete = () => {
    dispatch(deleteInfo(id))
    handleOpen();
  }

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" color='red'>
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure you want to delete?</DialogHeader>
        <DialogBody divider>
          When you delete a data it is permanent and you can't access it anymore.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDelete}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default Dialogue
