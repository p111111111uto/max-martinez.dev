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
                    <h2>Hello there!</h2>
                    <h1>My name is MAX MARTINEZ</h1>
                    <Type />
                </ParallaxLayer>

                <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    backgroundImage: `url(${earth})`,
                    backgroundSize: 'cover'
                }}>
                    <h1>Who am I?</h1>
                    <h2>I started learning how to code in 2022 and since then, I&apos;ve loved it!</h2>
                    <h2>I enjoy building visually appealing fullstack applications and websites.</h2>
                    <h2>I am currently taking the University of Miamis fullstack coding bootcamp where I learned to create this website!</h2>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}