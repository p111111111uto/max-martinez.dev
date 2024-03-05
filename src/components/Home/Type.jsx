import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'Software developer',
                    'React enthusiast',
                    'Lifelong learner',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}