import React, {useState} from 'react'
import { TextField, Button, Container } from '@mui/material'
import {useNavigate} from 'react-router-dom'

const AddListing = (props) => {
  const {user, addListing, listings} = props;
  const [listingInfo, setListingInfo] = useState({
    name: "",
    address: "",
    openHour: "",
    closeHour: "",
    description: ""
  })

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setListingInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const createNewListing = (e) => {
    e.preventDefault();
    let listObj = {
      id: listings.length + 1,
      name: listingInfo.name,
      address: listingInfo.address,
      hours: {
        open: listingInfo.openHour,
        close: listingInfo.closeHour
      },
      description: listingInfo.description
    }
    addListing(listObj);
    navigate("/")
  }

  return(
    <>
    {user && <div style={{backgroundColor: 'grey', }}>Welcome, {user.userName}</div>}
    <Container maxWidth="sm">
        <form className="login-form" onSubmit={createNewListing}>
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.name}
            name="name"
            label="Name"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.address}
            name="address"
            label="Address"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.openHour}
            name="openHour"
            label="Opening Hour"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.closeHour}
            name="closeHour"
            label="Closing Hour"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.description}
            name="description"
            label="Description"
            type="text"
            variant="standard"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            sx={{backgroundColor: 'green', width: '10vw', margin: '10px'}}
          >
            Save Listing
          </Button>
        </form>
      </Container>
    </>
  )
}

export default AddListing