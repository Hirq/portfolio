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
import { FaLinkedin, FaGithub } from "react-icons/fa";


const useStyles = makeStyles(theme => ({

  topContainer:{
    minWidth:'100%',
    backgroundColor: "#169565", 
    minHeight: "50vh",
    height:'100%', 
    border: '2px solid #fff', 
    borderRadius: '5px',
  },

  bottomContainer:{
    backgroundColor: "#157450 ", 
    minHeight: "100vh", 
    height:"100%", 
    border: '3px solid #fff', 
    borderRadius: '5px',
  },

  footer:{
    minWidth: "100%",
    padding: 0,
    backgroundColor: "#169565", 
    minHeight: "15vh",
    height:'100%', 
    border: '2px solid #fff', 
    borderRadius: '5px',
  },

  rootBottom: {
    width: "100%",
    padding: 15,
    marginTop: '-10vh'
  },

  rootTop: {
    width: "100%",
    padding: 50,
  },

  list: {
    border: '2px solid red',
    borderRadius: '5px',
    padding:35,
    marginBottom:10,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
  icons:{
    textAlign:'right',
  },

  iconsElement:{
    color:'white',
  },

  name:{
    textAlign:'center',
    color: 'white',
    fontSize: '25px',
  },

  introduce:{
    textAlign:'center',
    color:'blue',
  },

  buttons:{
    textAlign:'center',
    color:'blue',
  },

  buttonElement:{
    marginLeft: '5px',
    padding: 5,
    backgroundColor: 'red',
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
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.topContainer}>
        <Container maxWidth="sm" className={classes.rootTop}>

          <Typography component="div" className={classes.icons}>
            <FaGithub className={classes.iconsElement}/>
            <FaLinkedin className={classes.iconsElement}/>
          </Typography>
          <Typography component="div" className={classes.name}>
            Hello My name is Cezary and this is my portfolio!
          </Typography>
          <Typography component="h2" className={classes.introduce}>
            Junior developer with basics react,angular and python.
          </Typography>
          <Typography component="h2" className={classes.buttons}>
            <Button size="small" className={classes.buttonElement}>Portfolio</Button>
            <Button size="small" className={classes.buttonElement}>CV</Button>
          </Typography>
        </Container>
      </Container>


      <Container maxWidth="sm" className={classes.bottomContainer} >
        <Typography component="div">
          <div className={classes.rootBottom}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button className={classes.list}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button className={classes.list}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </div>
          <div className={classes.kontakt}>
            Kontakt
          </div>
        </Typography>
      </Container>

      <Container maxWidth="sm" className={classes.footer}>
        <Typography component="div" className={classes.footerButton}>
          <Button size="small">Button</Button>
        </Typography>
        <Typography component="div" className={classes.footerIcons}>
          <FaGithub />
          <FaLinkedin />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
