import "../styles/layouts/about.scss"
import React from 'react';
import IconTextLine from "../components/IconTextLine";

const About = () => {
    return (
        <div className={"about"}>
            <div>
                <h3>
                    We are a team of enthusiasts who adore chess! Unfortunately, we
                    have encountered the problem that most of the existing chess
                    services are outdated and in some cases almost not user-friendly.
                    Therefore, we decided to correct this shameful injustice, this is
                    how the first idea about "chess online" appeared, so we can offer:
                </h3>
                <IconTextLine icon={"&#10003;"} text={"Playing against a real person"}/>
                <IconTextLine icon={"&#10003;"} text={"Playing against artificial intelligence"}/>
                <IconTextLine icon={"&#10003;"} text={"Tournaments"}/>
                <IconTextLine icon={"&#10003;"} text={"Tutorials on all possible chess properties"}/>
                <IconTextLine icon={"&#10003;"} text={"And also an interesting place where every chess fan can show himself and his intelligence"}/>
                <IconTextLine icon={"&#10003;"} text={"Profile, checkerboard and chess customization"}/>
                <h3>
                    And also friendly support, where they will certainly help you with
                    your questions and also accept wishes and comments
                </h3>
            </div>

            <address className={"contact-us"}>
                <IconTextLine icon={"&#x260E;"} text={"Phone number: +3800971111111"}/>
                <IconTextLine icon={"&#x2709;"} text={"Email: chessonline@email.com"}/>
                <IconTextLine icon={"&#127962;"} text={"Address: Ukraine, Ternopil"}/>
            </address>
        </div>
    );
};

export default About;