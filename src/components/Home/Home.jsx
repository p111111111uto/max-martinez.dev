import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Type from './Type';

export default function Home() {
    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer speed={1}>
                    <h2>Hello there!</h2>
                    <h1>My name is MAX MARTINEZ</h1>
                    <Type />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5}>
                    <h1>Who am I?</h1>
                    <h2>I started learning how to code in 2022 and since then, I&apos;ve loved it!</h2>
                    <h2>I enjoy building visually appealing fullstack applications and websites.</h2>
                    <h2>I am currently taking the University of Miamis fullstack coding bootcamp where I learned to create this website!</h2>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}