import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Type from './Type';
import moon from '../assets/moon.jpg';
import earth from '../assets/earth.jpg';

export default function Home() {
    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer
                speed={1}
                factor={2}
                style={{
                    backgroundImage: `url(${moon})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="parallaxMain">
                        <h1>Hello Out There!</h1>
                        <h1>Come closer to my world...</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                offset={1}
                speed={0.5}
                factor={2}
                style={{
                    backgroundImage: `url(${earth})`,
                    backgroundSize: 'cover'
                }}>
                    <div>
                        <h1 style={{fontSize: '50px'}}>WHO AM I?</h1>
                        <div style={{fontSize: '30px', fontWeight: 'bold', color: '#7393B3'}}>
                            <Type />
                        </div>
                        <p className="bodyText">
                            My name is Max Martinez and I am an aspiring software engineer.
                            <br />
                            I started learning how to code in 2022 and since then, I&apos;ve loved it!
                            <br />
                            I am currently taking the University of Miamis fullstack coding bootcamp where I learned to create this website!
                        </p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}