

import React from "react";
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
    a:{
      textDecoration: 'none',
    }
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.topContainer}>
        <Container  className={classes.rootTop}>

          <Typography component="div" className={classes.icons}>
            <a href="https://github.com/Hirq">
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

            <Button size="small" className={classes.buttonElement}>Portfolio</Button>

            <a href="https://drive.google.com/file/d/1DoQU7gAMd7n7Tp5tQcZrWERKTVwlxTA-/view?usp=sharing">
              <Button size="small" className={classes.buttonElement}>CV</Button>
            </a>
          </Typography>
        </Container>
      </Container>
      <Container className={classes.bottomContainer} >
        <Typography component="div">
          <div className={classes.rootBottom}>
            <List component="nav" aria-label="main mailbox folders">

              <ListItem button className={classes.list}>
                <div className={classes.listContent}>
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
                    <a href="https://github.com/Hirq/Loquest">
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <a href="http://hirq.ct8.pl/">
                    <Button size="small" className={classes.listButtonElement2}>
                    Online
                    <FaGgCircle className={classes.listButtonIconsElement}/>
                    </Button>
                    </a>
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
                    Sklep internetowy z gitarami oraz efektami gitarowymi.
                  </div>
                  <div className={classes.listButton}>
                    <a href="https://github.com/Hirq/Shop/tree/onlyDjango">
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <a href="http://hirq-shop.ct8.pl/">
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
                  Serwis gdzie programista się ogłsza, że szuka pracy.<br/>
                  </div>
                  <div className={classes.listButton}>
                    <a href="https://github.com/Hirq/FindDev">
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <a href="XXX">
                    <Button size="small" className={classes.listButtonElement2}>
                      view
                    <FaGgCircle className={classes.listButtonIconsElement}/>
                    </Button>
                    </a>
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
                    <a href="https://github.com/Hirq/Woradd">
                      <Button size="small" className={classes.listButtonElement}>
                      GitHub
                      <FaGithub className={classes.listButtonIconsElement}/>
                      </Button>
                    </a>
                    <a href="XXX">
                    <Button size="small" className={classes.listButtonElement2}>
                      view
                    <FaGgCircle className={classes.listButtonIconsElement}/>
                    </Button>
                    </a>
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
          <Button size="small" className={classes.buttonElementFooter}>
            Contact
          </Button>
        </Typography>
        <Typography component="div" className={classes.footerIcons}>
          <a href="https://github.com/Hirq/">
            <FaGithub className={classes.iconsElement}/>
          </a>
          <a href="https://pl.linkedin.com/in/cezary-zabrocki/">
            <FaLinkedin className={classes.iconsElement}/>
          </a>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
