import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'Desktop Support Technician',
                    'Tech enthusiast',
                    'Ethical hacker',
                    'Python guru',
                    'Lifelong learner',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}