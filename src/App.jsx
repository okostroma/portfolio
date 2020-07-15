import React from 'react';
import './App.module.css';
import WrPreview from "./components/WrPreview/WrPreview";
import WrSkills from "./components/WrSkills/WrSkills";
import WrWorks from "./components/WrWorks/WrWorks";
import WrFreelance from "./components/WrFreelance/WrFreelance";
import WrContacts from "./components/WrContacts/WrContacts";
import WrFooter from "./components/WrFooter/WrFooter";
import Particles from 'react-particles-js';


const App = () => {


    return (
        <div className="App">
            {/*<Particles className='particles' params={particleOpt}/>*/}

            <WrPreview />
            <WrSkills />
            <WrWorks />
            <WrFreelance />
            <WrContacts />
            <WrFooter />

        </div>
    );
}

export default App;
