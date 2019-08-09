import React from 'react';
import logo from './logo.svg';
import './App.scss';

//icons
import appleCopy from './assets/apple.png';
import youtubeCopy from './assets/youtube.png';
import googleCopy from './assets/google.png';
import spotifyCopy from './assets/spotify.png';
import stitcherCopy from './assets/stitcher.png';

//material
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles(theme => ({

	button: {
		margin: theme.spacing(1),
		// background: 'green'
	},

	apple: {
		background: '#C463EB',
		color: 'white',
		margin: theme.spacing(1),
	},

	youtube: {
		background: '#ED3833',
		color: 'white',
		margin: theme.spacing(1),
	},

	google: {
		background: '#FDCC17',
		color: 'white',
		margin: theme.spacing(1),
	},

	spotify: {
		background: '#1BD75F',
		color: 'white',
		margin: theme.spacing(1),
	},

	stitcher: {
		background: '#3292C5',
		color: 'white',
		margin: theme.spacing(1),
	},
	card: {
		height: '200px'
	},

	root: {
		padding: theme.spacing(1, 1),
		color: 'rgb(65, 65, 65)'
	}
}));


function App() {
	console.log('hello');
	const classes = useStyles();
	const theme = useTheme();

	const copyLinkToClipBoard = () => {
		var copyText = document.getElementById("myInput");
		copyText.select();
		document.execCommand("copy");
		alert("Copied the text: " + copyText.value);
	}

	return (
		<div className="App">

			<div className="zg-top">
				<div className="card-container">
					<Card className={classes.card}>
						<img className="main-logo" src="https://i.iheart.com/v3/catalog/podcast/45924242" alt="fourth wall podcast logo" />
					</Card>
				</div>

				<div className="paper-container">
					<Paper className={classes.root}>
						<Typography component="p">
							Let's listen to The Fourth Wall on...
          				</Typography>
					</Paper>
				</div>
			</div>

			<div className="zg-bottom">
	
				<div className="zg-podcasts-container">
				
					<div className="zg-podcast-container">
						<Button target="_blank" href="https://podcasts.apple.com/us/podcast/the-fourth-wall-podcast/id1464608975" variant="contained" className={classes.apple}>
							Apple
						</Button>

						<IconButton className="zg-copy-button">
							<img className="copyIcon" src={appleCopy} alt="copyLink" />
						</IconButton>
					</div>


					<div className="zg-podcast-container">
						<Button target="_blank" href="https://www.youtube.com/channel/UCrMRs4dZmAAmKkbeLalixAA" className={classes.youtube}>
							Youtube
						</Button>

						<IconButton className="zg-copy-button">
							<img className="copyIcon" src={youtubeCopy} alt="copyLink" />
						</IconButton>
					</div>


					<div className="zg-podcast-container">
						<Button target="_blank" href="https://play.google.com/music/m/Isq5occ2n75eytqi3e44xes5ouy?t=The_Fourth_Wall_Podcast" variant="contained" className={classes.google}>
							Google
						</Button>

						<IconButton className="zg-copy-button">
							<img className="copyIcon" src={googleCopy} alt="copyLink" />
						</IconButton>

					</div>

					<div className="zg-podcast-container">
						<Button target="_blank" href="https://open.spotify.com/show/75978jAwNVsjI2H6W4Gyux" variant="contained" className={classes.spotify}>
							Spotify
						</Button>

						<IconButton className="zg-copy-button">
							<img className="copyIcon" src={spotifyCopy} alt="copyLink" />
						</IconButton>
					</div>


					<div className="zg-podcast-container">
						<Button target="_blank" href="https://www.stitcher.com/podcast/anchor-podcasts/the-fourth-wall-with-zak-and-cody" variant="contained" className={classes.stitcher}>
							Stitcher
						</Button>

						<IconButton className="zg-copy-button">
							<img className="copyIcon" src={stitcherCopy} alt="copyLink" />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
