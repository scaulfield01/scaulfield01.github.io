import NeonLabPic from '../images/NeonLabPic.png'
import PocketSFPic from '../images/PocketSFPic.png'
import PortfolioPic from '../images/PortfolioPic.png'
import WixtedGroupPic from '../images/WixtedGroupPic.png'
import ProfilePic from '../images/profilepic.png'
import MusicPic from '../images/MusicPic.jpg'


const UTILS = {

  displayPages: ['about', 'portfolio', 'music', 'contact'],
  // portfolioExampleImgs = [NeonLabPic,PocketSFPic,PortfolioPic,WixtedGroupPic]

  decriptions: [
      {
        title: "NeonPro",
        description: "This application used neuroscience-based deep learning and predictive analytics to identify video thumbnails, GIFs, and images that generate high levels of engagement for our Media Clients. I was responsible for building out numerous react components and making our designers blueprint a reality.",
        image: NeonLabPic
      },
      {
        title:"Pocket San Francisco",
        description:"Final Project for Dev Bootcamp that transforms raw public data into a responsive visualization of city-wide bike parking, art installations, mobile food, and health inspection scores. This web app was built in Meteor.js in under a week and was featured on the city of San Franciscos DataSF app showcase.",
        image: PocketSFPic
      },
      {
        title:"Rubik's Cube Portfolio",
        description:"The thought behind my first portfolio was to copy the look and feel of Erno Rubrik's patent. It was my first experience with github and was rewarding to complete a vision I had.",
        image: PortfolioPic
      },
      {
        title:"Wixted Group Home Page",
        description:"This was one of the first websites I ever built. It was comissioned by a family friend and I am proud to say it is still in use today.",
        image: WixtedGroupPic
      }
    ]

}

export default UTILS