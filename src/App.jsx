import './App.css';
import { RecoilRoot } from 'recoil';
import Animals from './components/Animals';
import PickAnimal from './components/PickAnimals';
function App() {
    return (
        <RecoilRoot>
            <div className='flex flex-col justify-center text-center ml-11 px-10'>
                <PickAnimal />
                <Animals />
            </div>
        </RecoilRoot>
    );
}
export default App;
