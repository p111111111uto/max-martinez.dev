import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Type from './Type';
import moon from './assets/moon.jpg';
import earth from './assets/earth.jpg';
import stars from './assets/stars.jpg';
import astronaut from './assets/astronaut.png';


export default function Home() {
    return (
        <div style={{overflow: 'hidden'}}>
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
                    <div className="firstText">
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
                factor={1.5}
                style={{
                    backgroundImage: `url(${earth})`,
                    backgroundSize: 'cover',
                }}>
                    <div>
                        <h1 style={{fontSize: '50px'}}>WHO AM I?</h1>
                        <div style={{fontSize: '30px', fontWeight: 'bold', color: '#FFD700'}}>
                            <Type />
                        </div>
                        <div className="container">
                            <div className="bodyText">
                                <h3>
                                    My name is <span style={{color: '#FFD700'}}>Max</span> and I am a desktop support technician at the University of Miami.
                                    <br />
                                    I have over two year&apos; of experience in the IT industry and am currently pursuing my bachelor&apos; in Cybersecurity and Information Assurance.
                                    <br />
                                </h3>
                            </div>
                            <img src={astronaut} className="astronaut" />
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}