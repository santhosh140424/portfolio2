import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Andrej",
    lastName: "Vrkljan",
    initials: "AV", // the example uses first and last, but feel free to use three or more if you like.
    position: "Blockchain developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'In blocks we trust'
        },
        {
            emoji: '🌎',
            text: 'I am based in European Union'
           
        },
        {
            emoji: "💼",
            text: "Senfina Bridge"
        },
        {
            emoji: "📧",
            text: "andrej.vrkljan@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/Andrej656",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/andrej-vrkljan-253212178/details/recommendations/?detailScreenTabIndex=0",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "👋 Hey there! I'm Andrej, a passionate developer specializing in crafting innovative Web3 applications using TypeScript, Node.js, Solidity, and Clarity. I have developed blockchain based software for digital assests tax and regulatory support, sales support platforms (crypto and goods exchange), and decentralized platforms to support social network and non-profit needs. I served as project manager several blockchain projects supervising 10+ developers in start-up environment.",
    skills:
        {
            proficientWith: ['javascript', 'react', "nodejs", 'git', 'AWS', 'html5', 'css3', "solidity", "clarity", "hardhat", "clarinet", "miro", "jira"],
            exposedTo: ['rust', 'c', 'SCRYPT'],
           

        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'running',
            emoji: '🤸'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Taxtris",
            live: "https://www.taxtris.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Map Of Crypto",
            live: "https://mapofcrypto.netlify.app/",
            source: "https://github.com/Map-of-Crypto",
            image: mock2
        },
        {
            title: "People's",
            live: "https://peoples.on.fleek.co/",
            source: "https://github.com/People-s",
            image: mock3
        },
        {
            title: "DAO Found",
            live: "https://daofound.vercel.app/",
            source: "https://github.com/DAOFound",
            image: mock4
        },
        {
            title: "Optistore",
            live: "https://ethglobal.com/showcase/optistore-egycn",
            source: "https://github.com/Optistore",
            image: mock5
        },
        {
            title: "Colomint",
            live: "https://colomint.surge.sh/",
            source: "https://github.com/colomint",
            image: mock6
        },
        {
            title: "Lumishare",
            live: "https://lumishare.io/",
            source: "https://github.com/Lumishare",
            image: mock1
        },
        {
            title: "BlockCity",
            live: "https://blockcity-ui-xi.vercel.app",
            source:"https://github.com/Andrej656/blockcity-ui",
            image: mock1
        }

    ]
}