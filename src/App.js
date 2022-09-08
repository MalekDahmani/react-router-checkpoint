
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import React,{ useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MovieList from "./Component/MovieList"
import NavBar from "./Component/Filter";
import Home from './Component/Home';
import Trailer from './Component/Trailer';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const MovieData = [
        {
            id:uuidv4(),
            Title: "Princess Mononoke",
            Description:
                "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/53973c_480x.progressive.jpg?v=1609348363",
                TrailerUrl:"https://www.youtube.com/embed/4OiMOHRDs14",
            Rating: 3,
            
        },
        {
            id:uuidv4(),
            Title: "Harry Potter And The Sorcerer’s Stone",
            Description:
                "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/70d0aa41fbb0fb410bed757175a736ad_656bdff4-50fe-47a4-9ace-47afe4af16d4_480x.progressive.jpg?v=1573585301",
                TrailerUrl:"https://www.youtube.com/embed/VyHV0BRtdxo",
            Rating: 5,
            
        },
        {
            id:uuidv4(),
            Title: "Thor: Love and Thunder",
            Description:
                "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/thor_480x.progressive.jpg?v=1653571052",
                TrailerUrl:"https://www.youtube.com/embed/Go8nTmfrQd8",
            Rating: 5,
            
        },
        {
            id:uuidv4(),
            Title: "Obi-Wan Kenobi",
            Description:
                "Jedi Master Obi-Wan Kenobi has to save young Leia after she is kidnapped, all the while being pursued by Imperial Inquisitors and his former Padawan, now known as Darth Vader.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/obi-wan-kenobi_igbanigh_480x.progressive.jpg?v=1655212303",
                TrailerUrl:"https://www.youtube.com/embed/3Yh_6_zItPU",
            Rating: 4,
            
        },

        {
            id:uuidv4(),
            Title: "Minions: The Rise of Gru",
            Description:
                "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/minions-the-rise-of-gru_bj1rmbf3_480x.progressive.jpg?v=1649964309",
                TrailerUrl:"https://www.youtube.com/embed/6DxjJzmYsXo",
            Rating: 3,
            
        },
        {
            id:uuidv4(),
            Title: "Everything Everywhere All at Once",
            Description:
                "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/everything-everywhere-all-at-once_nysayfbn_480x.progressive.jpg?v=1648143747",
                TrailerUrl:"https://www.youtube.com/embed/wxN1T1uxQ2g",
            Rating: 3,
            
        },
        {
            id:uuidv4(),
            Title: "Spider-man",
            Description:
                "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0221fffb41bd707803f61da0be3c6087_64c880a9-e91c-4a58-bfa8-bb61b1b6f726_480x.progressive.jpg?v=1573595153",
                TrailerUrl:"https://www.youtube.com/embed/t06RUxPbp_c",
            Rating: 4,
            
        },
        {
            id:uuidv4(),
            Title: "Pirates Of The Caribbean: The Curse Of The Black Pearl",
            Description:
                "In the 1950s, a music director falls in love with a singer and tries to persuade her to flee communist Poland for France.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c9d5fb11c495e731413c16f8ad6838e0_adc81f87-ccdf-4f98-8b7f-cdaa8884f515_480x.progressive.jpg?v=1573585499",
                TrailerUrl:"https://www.youtube.com/embed/naQr0uTrH_s",
            Rating: 4,
          
        },
        {
            id:uuidv4(),
            Title: "Matrix",
            Description:
                "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.progressive.jpg?v=1573587596",
                TrailerUrl:"https://www.youtube.com/embed/9ix7TUGVYIo",
            Rating: 3,
           
        },
        {
            id:uuidv4(),
            Title: "Arcane",
            Description:
                "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54409_480x.progressive.jpg?v=1642690615",
                TrailerUrl:"https://www.youtube.com/embed/fXmAurh012s",
            Rating: 5,
           
        },
        {
            id:uuidv4(),
            Title: "Avatar: The Way of Water",
            Description:
                "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avatar-the-way-of-water_zqtfz53g_480x.progressive.jpg?v=1654873098",
                TrailerUrl:"https://www.youtube.com/embed/a8Gx8wiNbs8",
            Rating: 5,
            
        },

        {
            id:uuidv4(),
            Title: "Jurassic World: Dominion",
            Description:
                "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/jurassic_480x.progressive.jpg?v=1652382136",
                TrailerUrl:"https://www.youtube.com/embed/fb5ELWi-ekk",
            Rating: 5,
          
        },
        {
            id:uuidv4(),
            Title: "Iron Man",
            Description:
                "Iron Man",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ironman_480x.progressive.jpg?v=1620318584",
                TrailerUrl:"https://www.youtube.com/embed/8ugaeA-nMTc",
            Rating: 4,
          
        },

        {
            id:uuidv4(),
            Title: "Toy Story",
            Description:
                "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8e5246d5f90632343a5ea3fa05c7255c_480x.progressive.jpg?v=1573618736",
                TrailerUrl:"https://www.youtube.com/embed/v-PjgYDrg70",
            Rating: 4,
            
        },
        {
            id:uuidv4(),
            Title: "Demon Slayer : Mugen Train",
            Description:
                "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",

            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/demonslayer_480x.progressive.jpg?v=1628715291",
                TrailerUrl:"https://www.youtube.com/embed/ATJYac_dORw",
            Rating: 2,
           
        },
        {
            id:uuidv4(),
            Title: "Bob’s Burgers Movie",
            Description:
                "The Belchers try to save the restaurant from closing as a sinkhole forms in front of it, while the kids try to solve a mystery that could save their family's restaurant.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-bobs-burgers-movie_oz38wliu_480x.progressive.jpg?v=1652820232",
                TrailerUrl:"https://www.youtube.com/embed/hldGGWN9HcI",
            Rating: 5,
           
        },
        {
            id:uuidv4(),
            Title: "Northman",
            Description:
                "From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-northman_htvqwffm_480x.progressive.jpg?v=1653497076",
                TrailerUrl:"https://www.youtube.com/embed/oMSdFM12hOw",
            Rating: 3,
           
        },
        {
            id:uuidv4(),
            Title: "Dune",
            Description:
                "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
            PosterUrl:
                "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_480x.progressive.jpg?v=1641576614",
                TrailerUrl:"https://www.youtube.com/embed/n9xhJrPXop4",
            Rating: 3,
            
        },
    ];
    
    const [newMovie, setNewMovie]=useState(MovieData)
    const [titleSearch, setTitleSearch] = useState("");
    const [rateSearch, setRateSearch] = useState("0");

    return (
        (
        <BrowserRouter>
         <div className="App">
            <NavBar
                setTitleSearch={setTitleSearch}
                setRateSearch={setRateSearch}
            />
            
            <Routes>
                <Route exact path="/" element={<Home/>}>
                    
                </Route>
                <Route path="/movies/:id" element={<Trailer newMovie={newMovie}/>}>
                    
                </Route>
                <Route path="/movies" element={<MovieList
                        titleSearch={titleSearch}
                        rateSearch={rateSearch}
                        newMovie={newMovie}
                        setNewMovie={setNewMovie}
                        />}>
                
                </Route>
            </Routes>

        </div>
        </BrowserRouter>
        )
    );
}

export default App;
