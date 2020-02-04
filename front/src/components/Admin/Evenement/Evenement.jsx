import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Fab,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog
} from '@material-ui/core';
import {
  Add,
  Edit,
  Delete,
  Image
} from '@material-ui/icons';
import PerfectScrollbar from 'react-perfect-scrollbar';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Evenement extends React.Component {
  constructor() {
    super();
    this.state = {
      event: [],
      name: "",
      photo:"",
      alt:"",
      article:"",
      date:"",
      description: "",
      nombre: "",
      isLogged: true,
      redirect: false,
      newModalOpen: false,
      deleteModalOpen: false,
      deleteId: "",
      modifedId: "",
      snackbarMessage: "",
      snackbarOpen: false,
      sidebarOpen: false,
      putModalOpen: false,
      redirectLogOut: false,
      limit: false,
      selectFileImages: null,
      loaded1: false
    }
  }

  handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'name':
        this.setState({ name: event.target.value })
        break;
      case 'photo':
        this.setState({ photo: event.target.value })
        break;
      case 'alt':
        this.setState({ alt: event.target.value })
        break;
      case 'article':
        this.setState({ article: event.target.value })
        break;
        case 'date':
        this.setState({ date: event.target.value })
        break;
        case 'description':
        this.setState({ description: event.target.value })
        break;
        case 'nombre':
        this.setState({ nombre: event.target.value })
        break;
      default:
        break;
    }
  }

  deleteBureau = () => {
    this.handleCloseDeleteModal();
    const event_id = this.state.event[this.state.deleteId].id
    fetch(SERVER_ADDRESS + '/events/' + event_id,
      {
        method: 'DELETE',
        headers: new Headers({
          'authorization': 'Bearer ' + localStorage.getItem('token')
        })
      }
    )
      .then(() => { this.getData() })
      .then(
        (res) => {
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "event supprimé"
          })
          setTimeout(() => {
            this.setState({ snackbarOpen: false })
          }, 3000);
        }
      )
  }

  addBureau = () => {
    this.handleCloseNewModal();
    this.onClickHandler();
    let event = {
      name: this.state.name,
      photo: this.state.photo,
      alt: this.state.alt,
      article: this.state.article,
      date: this.state.date,
      description: this.state.description,
      nombre: this.state.nombre
      
    }
    fetch(SERVER_ADDRESS + '/events',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        body: JSON.stringify(event),
      })
      .then(res => {
        res.json()
        console.log(res)
      })
      .then(() => { this.getData() })
      .then(res => this.setState({ snackbarMessage: "event ajouté." }))
      .then(
        (res) => {
          this.setState({ snackbarOpen: true })
          setTimeout(() => {
            this.setState({ snackbarOpen: false })
          }, 3000);
        }
      )
  }

  putBureau = () => {
    this.handleClosePutModal();
    this.onClickHandler();
    let event = {
        name: this.state.name,
        photo: this.state.photo,
        alt: this.state.alt,
        article: this.state.article,
        date: this.state.date,
        description: this.state.description,
        nombre: this.state.nombre
    }
    let event_id = this.state.event[this.state.modifedId].id
    console.log(event_id)
    fetch(SERVER_ADDRESS + '/events/' + event_id,
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        body: JSON.stringify(event),
      })
      .then(
        () => {
          fetch(SERVER_ADDRESS + '/events',
            {
              headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token')
              }),

            }
          )
            .then(res => res.json())
            .then(res => this.setState({ event: res }))
            .then(
              () => console.log(this.state.event)
            )
        }
      )
      .then(res => this.setState({ snackbarMessage: "event modifié." }))
      .then(
        (res) => {
          this.setState({ snackbarOpen: true })
          setTimeout(() => {
            this.setState({ snackbarOpen: false })
          }, 3000);
        }
      )
      .then(
        () => {
          const newArrayBureau = this.state.event
          newArrayBureau[this.state.modifedId] = {
            id: event_id,
            email: this.state.email
          }
          this.setState({ event: newArrayBureau })
        }
      )
  }

  handleClosePutModal = () => {
    this.setState({ putModalOpen: false })
  }

  handleOpenPutModal = (index) => {
    let user_id = this.state.event[index].id
    fetch(SERVER_ADDRESS + '/events/' + user_id)
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res[0].name,
          photo: res[0].photo,
          alt: res[0].alt,
          artiste: res[0].artiste,
          date: res[0].date,
          description: res[0].description,
          nombre: res[0].nombre
        }, () => {
          this.setState({ putModalOpen: true })
          this.setState({ modifedId: index })
        })
      })
  }

  handleCloseDeleteModal = () => {
    this.setState({ deleteModalOpen: false })
  }

  handleOpenDeleteModal = (index) => {
    this.setState({ deleteModalOpen: true })
    this.setState({ deleteId: index })
  }

  handleOpenNewModal = () => {
    this.setState({
      name: "",
      photo:"",
      alt:"",
      artiste:"",
      date:"",
      heure:"",
      description: "",
      nombre: "",
      prix:""
    }, () => {
      this.setState({ newModalOpen: true })
    })
  }

  handleCloseNewModal = () => {
    this.setState({ newModalOpen: false })
  }

  openMenu = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
    const menu = document.querySelector('.side-nav')
    if (this.state.sidebarOpen === false) {
      menu.style.display = "block"
    }
    else {
      menu.style.display = "none"
    }
  }

  getData = () => {
    fetch(SERVER_ADDRESS + '/events',
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }),

      }
    )
      .then(res => res.json())
      .then((res) => {
        this.setState({ event: res })
      })

  }

  componentDidMount() {
    const token = {
      token: localStorage.getItem('token')
    }

    fetch(SERVER_ADDRESS + '/token',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(token),
      })
      .then(res => res.json())
      .then(
        (res) => {
          this.setState(
            {
              isLogged: res.succes,
              redirect: res.succes ? false : true
            });
        }
      )
    this.getData()
  }

  logOut = () => {
    this.setState({ redirectLogOut: true })
    localStorage.setItem('token', "")
  }

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectFileImages);
    fetch(SERVER_ADDRESS + '/uploadFile', {
      method: 'POST',
      mode: "cors",
      credentials: "same-origin",
      redirect: "follow",
      referrer: "no-referrer",
      body: data
    }).then(res => {
      console.log(res.statusText);
    });
  };

  onChangeHandler = event => {
    this.setState({
      selectFileImages: event.target.files[0],
      loaded1: true,
    }, () => this.setState({ photo: this.state.selectFileImages.name }));
  }

  render() {
    return (
      <>
        <Grid className="item" item>
          <Paper elevation={1}>
            <Card>
              <CardHeader
                className="jtestd"
                action={
                  <Fab
                    style={{ backgroundColor: "#1976d2", color: 'white' }}
                    onClick={this.handleOpenNewModal}
                    size="small"
                  >
                    <Add />
                  </Fab>
                }
                title="Nos events"
              />
              <Divider />
              <CardContent className="content">
                <PerfectScrollbar>
                  <div className="inner">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Nom</TableCell>
                          <TableCell>Photo</TableCell>
                          <TableCell>Alt</TableCell>
                          <TableCell>Artiste</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Heure</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Nombre</TableCell>
                          <TableCell>Prix</TableCell>
                          <TableCell>Editer / Supprimer</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.event.map((events, index) => (
                          <TableRow
                            hover
                            key={events.id}
                          >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{events.name}</TableCell>
                            <TableCell>{events.photo}</TableCell>
                            <TableCell>{events.alt}</TableCell>
                            <TableCell>{events.artiste}</TableCell>
                            <TableCell>{events.date}</TableCell>
                            <TableCell>{events.heure}</TableCell>
                            <TableCell>{events.description}</TableCell>
                            <TableCell>{events.nombre}</TableCell>
                            <TableCell>{events.prix}</TableCell>
                            <TableCell>

                              <Button
                                style={{ backgroundColor: "#1976d2", color: 'white' }}
                                onClick={() => this.handleOpenPutModal(index)}
                                size="small"
                                startIcon={<Edit />}
                              >
                                Editer
                          </Button>
                              <Button
                                style={{ marginLeft: '10px' }}
                                disabled={this.state.limit}
                                variant="contained"
                                onClick={() => this.handleOpenDeleteModal(index)}
                                color="secondary"
                                size="small"
                                endIcon={<Delete />}
                              >
                                Supprimer
                          </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </PerfectScrollbar>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Dialog open={this.state.newModalOpen} onClose={this.handleCloseNewModal} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Crée un event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pour créer un event veuillez remplir les champs obligatoires.
                  </DialogContentText>
                  {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                   */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              fullWidth
              name="name"
              onChange={this.handleChangeInput}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              multiline
              name="description"
              onChange={this.handleChangeInput}
            />
            <TextField
              margin="dense"
              id="liens_site"
              label="Liens vers le site web"
              type="text"
              fullWidth
              name="liens_site"
              onChange={this.handleChangeInput}
            />
            <input
              style={{
                display: "none"
              }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.onChangeHandler}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                endIcon={<Image />}
              >
                Choisir une image
              </Button>
              {this.state.loaded1 ? this.state.selectFileImages.name : ""}
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseNewModal} color="primary">
              Annuler
                  </Button>
            <Button onClick={this.addBureau} color="primary">
              Créer
                  </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.deleteModalOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Suppression d'un event"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Etes vous sur de vouloir supprimer le event ?
              </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDeleteModal} color="primary">
              Non
              </Button>
            <Button onClick={this.deleteBureau} color="primary" autoFocus>
              Oui
              </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={this.state.putModalOpen} onClose={this.handleClosePutModal} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Modifier un event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pour modifer ce event veuillez saisir les champs obligatoires.
                </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              fullWidth
              name="name"
              onChange={this.handleChangeInput}
              defaultValue={this.state.name}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              multiline
              name="description"
              onChange={this.handleChangeInput}
              defaultValue={this.state.description}
            />
            <TextField
              margin="dense"
              id="liens_site"
              label="Liens vers le site web"
              type="text"
              fullWidth
              name="liens_site"
              onChange={this.handleChangeInput}
              defaultValue={this.state.liens_site}
            />
            <input
              style={{
                display: "none"
              }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.onChangeHandler}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                endIcon={<Image />}
              >
                Choisir une image
              </Button>
              {this.state.loaded1 ? this.state.selectFileImages.name : ""}
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClosePutModal} color="primary">
              Annuler
                  </Button>
            <Button onClick={this.putBureau} color="primary">
              Modifier
                  </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
        />

      </>
    );
  }
}

export default Evenement;
