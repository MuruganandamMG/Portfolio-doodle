import { Particles as ReactParticles } from "react-tsparticles";
import options from "../config/particles.json";

const Particles = () => {
    return (
        <div className="particle-container" aria-hidden="true">
            <ReactParticles options={options} height="100%" />
        </div>
    );
};
export default Particles;
