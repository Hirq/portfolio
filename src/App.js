import React from "react";
import "./index.css"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { FaLinkedin, FaGithub, FaGgCircle } from "react-icons/fa";
import { DiPython, DiDjango, DiHtml5, DiCss3, DiAngularSimple, DiSass, DiReact } from "react-icons/di";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles(theme => ({

  topContainer:{
    minWidth:'100%',
    backgroundColor: "#2E576B",
    minHeight: "400px",
    height:'100%', 
    border: '2px solid #fff', 
    borderRadius: '5px',
  },

  bottomContainer:{
    backgroundColor: "", 
    height:"100%", 
    border: '3px solid #fff', 
    borderRadius: '5px',
  },

  footer:{
    minWidth: "100%",
    padding: 0,
    backgroundColor: "#2E576B", 
    minHeight: "15vh",
    height:'100%', 
    border: '2px solid #fff', 
    borderRadius: '5px',
  },

  rootBottom: {
    width: "100%",
    padding: 15,
    marginTop: '-100px'
  },

  rootTop: {
    width: "100%",
    padding: 50,
  },
///////////////
  icons:{
    textAlign:'right',
  },

  iconsElement:{
    color:'white',
    marginLeft: '1vh',
    "&:hover": {
      padding: '1px',
    },
  },

  name:{
    textAlign:'center',
    color: 'white',
    fontSize: '25px',
    fontWeight: '700',
    marginTop: '5vh',
  },

  introduce:{
    textAlign:'center',
    color:'black',
    fontWeight: '450',
    marginTop: '5vh',

  },

  buttons:{
    textAlign:'center',
    marginTop: '5vh',
    marginBottom: '5vh',
  },

  buttonElement:{
    minWidth: '110px',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '5vh',
    padding: 5,
    color: 'white',
    backgroundColor: '#20693C',
    border: '1px solid #fff', 
    borderRadius: '1vh',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
      borderRadius: '2vh',
    },
  },

  footerButton:{
    textAlign:'center',
    marginTop: '3vh',
  },

  footerIcons:{
    textAlign:'center',
    marginTop: '3vh',
    color: 'white',
  },

///////////LIST
  list: {
    border: '2px solid #0A1526',
    borderRadius: '5px',
    padding:35,
    marginBottom:10,
    textAlign: 'center',
    backgroundColor: '#2C3C52',

    "&:hover": {
      backgroundColor: '#2C3C52',
    },
    "&:focus": {
      backgroundColor: '#2C3C52',
    },
    "&:active": {
      backgroundColor: '#2C3C52',
    },
  },

  listContent:{
    minWidth: '70%',
    textAlign: 'left',
  },

  listPhoto:{
    minWidth: '30%',
    backgroundImage: `url(${'https://i.vimeocdn.com/portrait/9798022_300x300'})`,
    minHeight: '200px',
    maxHeight: '100px',
  },
  listHeader:{
  },

  listName:{
    fontWeight: '600',
    marginRight: '2vh',
    fontSize: '25px',
    display: 'inline-block',
  },
  listIcons:{
    display: 'inline-block',
  },
  listIconsElement:{
    color:'white',
  },
  listIconsElementDjango:{
    color:'white',
    fontSize: '30px',
    marginBottom: '-7px',
  },

  listDescribe:{
    marginTop:'3vh',
    fontWeight: '300',
  },
  listButton:{
    marginTop:'5vh',
  },
  listButtonElement:{
    minWidth: '90px',
    color: 'white',
    backgroundColor: '#20693C',
    border: '1px solid #fff', 
    borderRadius: '1vh',
    marginRight: '20px',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
    },
  },
  listButtonElement2:{
    minWidth: '90px',
    color: 'white',
    backgroundColor: '#20693C',
    border: '1px solid #fff', 
    borderRadius: '1vh',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
    },
  },
    listButtonIconsElement:{
      marginLeft: '10px',
  },
  deleteUnderlining:{
    textDecoration: 'none',
  },
  //footer

  buttonElementFooter:{
    minWidth: '110px',
    padding: 5,
    color: 'white',
    backgroundColor: '#20693C',
    border: '1px solid #fff', 
    borderRadius: '1vh',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
      borderRadius: '2vh',
    },
  },
  //// CONTACT

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '700px',
    overflowY: 'auto',
    maxHeight: '100vh', 
  },

  textInput:{
    width: '100%',
    maxWidth:'30rem',
    marginTop: 10,
    marginBottom: 10,
  },

  textArea:{
    marginTop: 15,
    marginBottom: 10,
    padding: 5,
    width: '100%',
    maxWidth:'60rem',
    borderRadius: '1vh',
    "&:focus": {
      border: '1px solid #3449EF',
      borderRadius: '1vh',
    },
  },

  buttonSubmit:{
    textAlign: 'center',
    minWidth: '90px',
    color: 'white',
    backgroundColor: '#20693C',
    border: '1px solid #fff', 
    borderRadius: '1vh',
    marginRight: '20px',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
      border: '1px solid #20693C',
      borderRadius: '1vh',
    },
  },
  divNameContactForm:{
    textAlign: 'center',
    fontSize: '30px',
    border: '1px solid #20693C',
    borderRadius: '10vh',
    fontWeight: '800'
  },

  closeContactForm:{
    right: 0,
    position: 'absolute',
    fontSize: '35px',
    marginRight: '-10px',
    fontWeight: '500',
    marginTop: '-5px',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
      fontWeight: '800',
      marginTop: '-10px'
    },
  },
   
  divSubmit:{
    textAlign: 'center',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Redux() {
  // Import result is the URL of your image
  return <img src={'https://raw.githubusercontent.com/Hirq/portfolio/master/src/redux.png'} alt="Redux" style={{tintColor:'red', maxWidth:'15px'}}/>;
}

function LoquestZDJ() {
  // Import result is the URL of your image
  return <img src={'https://lh3.googleusercontent.com/RivvntB-z-qe59FF0j9bxy6tBXZCnksHIz_EvXvaSKa039MC9IwZLTORIirdJcZZcE8'} alt="Redux" style={{tintColor:'red', }}/>;
}

export default function SimpleList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.topContainer}>
        <Container  className={classes.rootTop}>
          <Typography component="div" className={classes.icons}>
            <a href="https://github.com/Hirq" >
              <FaGithub className={classes.iconsElement}/>
            </a>
            <a href="https://pl.linkedin.com/in/cezary-zabrocki/">
            <FaLinkedin className={classes.iconsElement}/>
            </a>
          </Typography>
          <Typography component="div" className={classes.name}>
            Hello My name is Cezary and this is my portfolio!
          </Typography>
          <Typography component="h2" className={classes.introduce}>
            Junior developer with basics react, angular and python.
          </Typography>
          <Typography component="h2" className={classes.buttons}>
            <a href="#bottomContainer">
              <Button size="small" className={classes.buttonElement}>Portfolio</Button>
            </a>
            <a href="https://drive.google.com/file/d/1DoQU7gAMd7n7Tp5tQcZrWERKTVwlxTA-/view?usp=sharing" className={classes.deleteUnderlining}>
              <Button size="small" className={classes.buttonElement}>CV</Button>
            </a>
          </Typography>
        </Container>
      </Container>
      <Container className={classes.bottomContainer} >
        <Typography component="div" id="bottomContainer">
          <div className={classes.rootBottom}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button className={classes.list}>
                <div class="listContent">
                  <div className={classes.listHeader}>
                    <div className={classes.listName}>
                    Loquest
                    </div>
                    <div className={classes.listIcons}>
                     <DiPython className={classes.listIconsElement}/>
                     <DiDjango className={classes.listIconsElementDjango}/>
                     <DiHtml5 className={classes.listIconsElement}/>
                     <DiCss3 className={classes.listIconsElement}/>
                    </div>   
                  </div>
                  <div className={classes.listDescribe}>
                    Pierwsza moja aplikacja fullstack w całości zbudowana na bibliotece Django.
                  </div>
                  <div className={classes.listButton}>
                    <a href="https://github.com/Hirq/Loquest" className={classes.deleteUnderlining}>
                      <Button size="small" class="listButtonElement">
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <a href="http://hirq.ct8.pl/" className={classes.deleteUnderlining}>
                      <Button size="small" class="listButtonElement2">
                      Online
                      <FaGgCircle className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                  </div>
                </div>



                <div class="listPhoto">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="Second slide"></img>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="Third slide"></img>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>



              </ListItem>

              <ListItem button className={classes.list}>
                <div className={classes.listContent}>
                  <div className={classes.listHeader}>
                    <div className={classes.listName}>
                      Majshop
                    </div>
                    <div className={classes.listIcons}>
                     <DiPython className={classes.listIconsElement}/>
                     <DiDjango className={classes.listIconsElementDjango}/>
                     <DiHtml5 className={classes.listIconsElement}/>
                     <DiCss3 className={classes.listIconsElement}/>
                    </div>   
                  </div>
                  <div className={classes.listDescribe}>
                    Sklep internetowy z efektami gitarowymi.
                  </div>
                  <div className={classes.listButton}>
                    <a href="https://github.com/Hirq/Shop/tree/onlyDjango" className={classes.deleteUnderlining}>
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <a href="http://hirq-shop.ct8.pl/" className={classes.deleteUnderlining}>
                      <Button size="small" className={classes.listButtonElement2}>
                      Online
                      <FaGgCircle className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                  </div>
                </div>
                <div className={classes.listPhoto}>
                  zdj
                </div>
              </ListItem>

              <ListItem button className={classes.list}>
                <div className={classes.listContent}>
                  <div className={classes.listHeader}>
                    <div className={classes.listName}>
                      FindDev
                    </div>
                    <div className={classes.listIcons}>
                     <DiAngularSimple className={classes.listIconsElement}/>
                     <DiHtml5 className={classes.listIconsElement}/>
                     <DiSass className={classes.listIconsElement}/>
                    </div>   
                  </div>
                  <div className={classes.listDescribe}>
                  W trakcie produkcji.
                  <br/>
                  Serwis dla programistów do poszukiwania pracy.<br/>
                  </div>
                  <div className={classes.listButton}>
                    <a href="https://github.com/Hirq/FindDev" className={classes.deleteUnderlining}>
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <Button size="small" className={classes.listButtonElement2} data-toggle="modal" data-target="#FinddevModal">
                      view
                      <FaGgCircle className={classes.listButtonIconsElement}/>
                    </Button>

                    <div class="modal fade bd-example-modal-lg" id="FinddevModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">

                          <div class="modal-header">
                            <h5 class="modal-title w-100  text-center" id="modal-header" >Add Worker</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>

                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Workers List</h5>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>

                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Login</h5>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>

                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Register</h5>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>
                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Purpose</h5>
                          </div>
                          <div class="modal-body">
                              <ul>
                                <li>Map</li>
                                <li>Subpage for company</li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className={classes.listPhoto}>
                  ZDJ
                </div>
              </ListItem>
              <ListItem button className={classes.list}>
                <div className={classes.listContent}>
                  <div className={classes.listHeader}>
                    <div className={classes.listName}>
                      Woradd
                    </div>
                    <div className={classes.listIcons}>
                     <DiReact className={classes.listIconsElement}/>
                      <Redux/>
                     <DiHtml5 className={classes.listIconsElement}/>
                     <DiSass className={classes.listIconsElement}/>
                    </div>   
                  </div>
                  <div className={classes.listDescribe}>
                    W trakcie produkcji. 
                      <br/>
                    Apliakacja do nauki jezyka angielskiego. <br/>
                  </div>
                  <div className={classes.listButton}>
                    <a href="https://github.com/Hirq/Woradd" className={classes.deleteUnderlining}>
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                      <Button size="small" className={classes.listButtonElement2} data-toggle="modal" data-target="#WoraddModal">
                        view
                      <FaGgCircle className={classes.listButtonIconsElement}/>
                      </Button>
                  </div>

                  
                  <div class="modal fade" id="WoraddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        
                          <div class="modal-header">
                            <h5 class="modal-title w-100  text-center" id="modal-header" >Add word</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>

                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Words list</h5>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>

                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Create note</h5>
                          </div>
                          <div class="modal-body">
                              <img class="d-block w-100" src="https://miro.medium.com/max/5920/1*AiVwCy6dXORN0j-0i9Jw5w.png" alt="First slide"></img>
                          </div>

                          <div class="modal-header">
                            <h5 class="modal-title  w-100  text-center" id="exampleModalLabel">Purpose</h5>
                          </div>
                          <div class="modal-body">
                              <ul>
                                <li>Set diffucult word</li>
                                <li>Calendar history of using time</li>
                              </ul>
                          </div>


                      </div>
                    </div>
                  </div>



                </div>
                <div className={classes.listPhoto}>
                  ZDJ
                </div>
              </ListItem>
            </List>
          </div>
        </Typography>
      </Container>
      <Container maxWidth="sm" className={classes.footer}>
        <Typography component="div" className={classes.footerButton}>
          <Button size="small" className={classes.buttonElementFooter} onClick={handleOpen}>
            Contact
          </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <div class="row">
                    <div class="col">
                      <div className={classes.closeContactForm}>
                        <a  onClick={handleClose}>
                          X
                        </a>
                      </div>
                      <div className={classes.divNameContactForm}>
                        Contact Form
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <TextField required id="outlined-basic" label="Name" variant="outlined" className={classes.textInput}/>
                      <TextField required id="outlined-basic" label="Title" variant="outlined" className={classes.textInput}/>                     
                    </div>
                    <div class="col">
                      <TextField required id="outlined-basic" label="Email" variant="outlined" className={classes.textInput}/>
                      <TextField id="outlined-basic" label="Phone" variant="outlined" className={classes.textInput}/>                      
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <TextField
                        required
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="3"
                        variant="outlined"
                        className={classes.textArea}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div className={classes.divSubmit}>
                        <a href="xxx" className={classes.deleteUnderlining}>
                          <Button size="small" className={classes.buttonSubmit}>
                            SUMBIT
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
        </Typography>
        <Typography component="div" className={classes.footerIcons}>
          <a href="https://github.com/Hirq/" className={classes.deleteUnderlining}>
            <FaGithub className={classes.iconsElement}/>
          </a>
          <a href="https://pl.linkedin.com/in/cezary-zabrocki/" className={classes.deleteUnderlining}>
            <FaLinkedin className={classes.iconsElement}/>
          </a>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
