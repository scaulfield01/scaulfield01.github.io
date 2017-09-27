import NeonLabPic from '../images/NeonLabPic.png';
import PocketSf from '../images/PocketSf.png';
import WixtedGroup from '../images/WixtedGroup.png';
import GitHubClone from '../images/GitHubClone.png';
import AirHorner from '../images/AirHorner.png';
import Source from '../images/source.mp4';

const UTILS = {
	profilePicture: {
		source: Source,
		name: 'Steve Caulfield',
		sideNote: ' Developer | Musician'
	},
	portfolioList: [
		{name: 'Github Clone', link: 'https://github.com/scaulfield01/nativetrial' ,description:'Built using React Native and Firebase this application is a github clone that allows the user to browse through differnt users and take notes on repositories.', img: GitHubClone}, 
		{name: 'Air Horner', link: 'http://examiner-polecat-61122.netlify.com/' ,description:'Progressive Web App with a single simple and significant purpose : bring the classNameic sound of the dance hall blow horn to the masses.', img: AirHorner}, 
		{name: 'Neon Pro', link: 'https://github.com/neonopen/wonderland/' ,description:'This application used neuroscience-based deep learning and predictive analytics to identify video thumbnails, GIFs, and images that generate high levels of engagement for our Media Clients. I was responsible for building out numerous react components and making our designers blueprint a reality.', img: NeonLabPic},
		{name: 'Pocket SF', link: 'http://apps.sfgov.org/showcase/apps/pocketsf/' ,description:'Final Project for Dev Bootcamp that transforms raw public data into a responsive visualization of city-wide bike parking, art installations, mobile food, and health inspection scores. This web app was built in Meteor.js in under a week and was featured on the city of San Franciscos DataSF app showcase.', img: PocketSf}, 
		{name: 'The Wixted Group', link:'http://www.wixtedgroup.com/', description:'This was one of the first websites I ever built. It was comissioned by a family friend and I am proud to say it is still in use today.', img: WixtedGroup}
	],
	socialObjects: [
		{name:'SoundCloud', link:'https://soundcloud.com/user-219103652'},
		{name: 'Envelope', link:'mailto:stephentcaulfield@gmail.com?'},
		{name:'Linkedin', link:'https://www.linkedin.com/in/stcaulfield/'},
		{name:'Github', link:'https://github.com/scaulfield01'}
	]
}

export default UTILS