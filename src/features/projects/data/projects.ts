// Defines types for project page layouts


// Block contents for a page section
export type SectionBlock =
    | { type: 'subheader'; content: string }
    | { type: 'text'; content: string }
    | { type: 'bullets'; header?: string; content: string[] }
    | { type: 'video'; src: string }
    | { type: 'divider' }

export interface Section {
    blocks: SectionBlock[];
}

export interface Project {
    id: string; // slug
    title: string;
    shortDescription: string; // For the project card listing
    thumbnail: string;
    featured: boolean;
    githubUrl?: string; // Optional GitHub link
    liveUrl?: string; // Optional live demo link
    sections: Section[];
}

// Project data array
export const projects: Project[] = [
    {
        id: 'ai-jazz-solo-generator',
        title: 'AI Jazz Solo Generator',
        shortDescription: 'An AI web tool that generates MIDI jazz solos based on user-defined chord progressions and styles.',
        thumbnail: '/projects/assets/ai-jazz-solo-generator/thumbnail.png',
        featured: true,
        githubUrl: 'https://github.com/DiegzM/AIJazzSoloGenerator',
        liveUrl: 'https://aijazz.diegojmejia.com',
        sections: [
            {
                blocks: [
                    { type: 'subheader', content: 'Overview' },
                    { type: 'divider' },
                    { type: 'text', content: `AI Jazz Solo Generator is a React+Flask web application that lets you input a jazz style, tempo, and chord progression through the GUI, and generates 
                        a MIDI solo for you based on that progression. It is perfect for those looking to add a jazz inspired solo on top of an existing chord progression. 
                        The model used for generation is a custom encoder-decoder Transformer trained on 400 solos from the Weimar Jazz Database.
                    `},
                ]
            },
            {
                blocks: [
                    { type: 'subheader', content: 'Features/How To Use' },
                    { type: 'divider' },
                    { type: 'bullets', header: "Solo Settings GUI:", content: [
                        "Filename: Custom filename up to 100 characters",
                        "Tempo: (In BPM) tempo range from 60-300",
                        "Style: The style of jazz, with the options (Bebop, Postbop, Hardbop, Swing, and Cool)",
                        "Key: The base key for the solo to be in"
                        ]
                    },
                    { type: 'bullets', header: "Chord Progression GUI:", content: [
                        "Add or remove custom bars (4/4 time only).",
                        "Bars can be copied and pasted onto other bars in order to speed up chord progression creation",
                        "Each bar has 4 beats, where each beat lets you Change the key and the quality such as (Db Major) and Copy chords and paste them onto other beats for faster usage",
                        ]
                    },
                    { type: 'bullets', header: 'Generation:', content: [
                            "Once all the above settings are set, hit Generate in order to generate the solo",
                            "This process may take around 5-30 seconds depending on the internet connection and length of the chord progression.",
                            "Once done, the MIDI file will be downloaded onto your system and you may open it up using a DAW or a MIDI player."
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'harmonic-series-synthesizer',
        title: 'Harmonic Series Synthesizer',
        shortDescription: 'A desktop synthesizer application that create and play sounds based on harmonic series overtones, allowing users to explore natural sound synthesis.',
        thumbnail: '/projects/assets/harmonic-series-synthesizer/thumbnail.png',
        featured: true,
        githubUrl: 'https://github.com/DiegzM/harmonic-series-online-synthesizer',
        liveUrl: 'https://harmonicseries.diegojmejia.com',
        sections: [
            {
                blocks: [
                    { type: 'subheader', content: 'Overview' },
                    { type: 'divider' },
                    { type: 'text', content: `An online visual synthesizer that demonstrates the Harmonic Series by allowing users to add harmonics and tweak their volumes. 
                        This was made for a school project related to Music Technology, and my purpose for this project was to show people how different harmonic series overtone 
                        settings and volumes change the overall texture of a sound. Users can also play a MIDI file or upload their own, and hear how the MIDI sounds with their 
                        harmonic preset.
                `},
                ]
            },
            {
                blocks: [
                    { type: 'subheader', content: 'Features' },
                    { type: 'divider' },
                    { type: 'bullets', header: "Harmonic Series" , content: [
                        "Add/Remove rows of overtones and change their volume",
                        "Select a harmonic preset (such as \"Church Organ\") that will automatically add/remove rows and adjust their volumes",
                    ]},
                    { type: 'bullets', header: "Audio", content: [
                        "Visualize the current waveform being played, using Fourier Synthesis",
                        "Adjust the Attack, Release, Transpose (in semitones and cents)",
                    ]},
                    { type: 'bullets', header: "MIDI", content: [
                        "Play a virtual piano keyboard using the computer keyboard and also toggle Sustain, Octave, Velocity, and Pitch Bend",
                        "Connect an external MIDI device to play",
                        "Select a preset MIDI file or upload your own MIDI file.",
                        "Play the MIDI file and also toggle looping and adjust the speed or playback postiion"
                    ]}
                ]

            },
            {
                blocks: [
                    {type: 'subheader', content: 'Tech Stack' },
                    { type: 'divider' },
                    { type: 'bullets', content: [
                        "Languages and Frameworks: HTML, CSS, JavaScript (Node.js), Vite",
                        "Libraries and APIs: Tone.js for audio synthesis and MIDI handling, Web MIDI API for external MIDI device support",
                    ]}
                ]
            },
            {
                blocks: [
                    {type: 'subheader', content: 'Demo Video' },
                    { type: 'divider' },
                    { type: 'video', src: '/projects/assets/harmonic-series-synthesizer/demo.mp4' },
                ]
            },
        ]
    },
    {
        id: 'aerodash',
        title: 'Aerodash',
        shortDescription: 'A fast-paced 3D aerial arcade racing game with dynamic tracks, opponent AI, and immersive environments.',
        thumbnail: '/projects/assets/aerodash/thumbnail.png',
        featured: true,
        githubUrl: 'https://github.com/DiegzM/Aerodash',
        liveUrl: 'https://diegom05.itch.io/aerodash',
        sections: [
            {
                blocks: [
                    { type: 'subheader', content: 'Game Overview' },
                    { type: 'text', content: `Aerodash is a flying arcade racer game developed using Godot. Race in your hovercraft through neon retrowave tracks using 
                        gravity and aerial physics! Aerodash uses a combination of drone and aircraft mechanics to create a satisfying, action-packed
                        and competitive experience.
                        
                        I led this project for the CPP Game Development Club throughout the Fall Semester, where i was responsible for communicating with
                        team members and making presentations to explain and demonstrate this game.
            `         },
                ]   
            },
            {                
                blocks: [
                    { type: 'subheader', content: 'Demo Video' },
                    { type: 'divider' },
                    { type: 'video', src: '/projects/assets/aerodash/demo.mp4' },
                ]
            }
        ]
    },
];