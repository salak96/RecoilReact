import './App.css';
import { RecoilRoot } from 'recoil';
import Animals from './components/Animals.jsx';
import PickAnimal from './components/PickAnimals';
function App() {
    return (
        <RecoilRoot>
            {/* mid  */}
            <div className='w-screen h-screen'>
                <div className='flex flex-col justify-center align-items-center  mx-auto p-4 bg-gray-200'>
                    <div className='flex flex-col justify-center align-items-center  mx-auto p-4 bg-gray-200'>
                        <PickAnimal />
                        <Animals />
                    </div>
                </div>
            </div>
        </RecoilRoot>
    );
}
export default App;
