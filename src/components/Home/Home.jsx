import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Type from './Type';
import moon from '../assets/moon.jpg';
import earth from '../assets/earth.jpg';
import stars from '../assets/stars.jpg';
import astronaut from '../assets/astronaut.png';

export default function Home() {
    return (
        <>
            <Parallax pages={3}>
                <ParallaxLayer
                offset={0}
                speed={1}
                factor={2.5}
                style={{
                    backgroundImage: `url(${moon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="parallaxMain">
                        <h1>Hello Out There!</h1>
                        <h1>Welcome to my world...</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    style={{
                        backgroundImage: `url(${stars})`,
                        backgroundSize: 'cover',
                    }}
                    speed={1.5}
                    factor={2.5}
                >

                </ParallaxLayer>

                <ParallaxLayer
                offset={2}
                speed={1}
                factor={2}
                style={{
                    backgroundImage: `url(${earth})`,
                    backgroundSize: 'cover',
                }}>
                    <div>
                        <h1 style={{fontSize: '50px'}}>WHO AM I?</h1>
                        <div style={{fontSize: '30px', fontWeight: 'bold', color: '#7393B3'}}>
                            <Type />
                        </div>
                        <div className="container">
                            <div className="bodyText">
                                <h3>
                                    My name is <span style={{color: '#7393B3'}}>Max Martinez</span> and I am an aspiring software engineer.
                                    <br />
                                    I started learning how to code in 2022 and since then, I&apos;ve loved it!
                                    <br />
                                    I am currently taking a fullstack coding bootcamp at the University of Miami where I learned to create this website!
                                </h3>
                            </div>
                            <img src={astronaut} className="astronaut" />
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}