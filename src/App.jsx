import './App.css';
import { RecoilRoot } from 'recoil';
import Animals from './components/Animals';
function App() {
    return (
        <RecoilRoot>
            <div className="flex justify-center text-center ml-11 px-10">
                <Animals />
                </div>
        </RecoilRoot>
    );
}
export default App;
