/* eslint-disable react-hooks/rules-of-hooks */
import { useSetRecoilState } from 'recoil';
import { animalFilterState } from '../atoms';

export default function pickAnimals() {
    const setAninamlFilter = useSetRecoilState(animalFilterState);
    console.log(setAninamlFilter);

    return (
        <div>
            <button className='bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setAninamlFilter('all')}>
                All
            </button>
            <button className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setAninamlFilter('dog')}>
                Dog
            </button>
            <button className='bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setAninamlFilter('cat')}>
                Cat
            </button>
        </div>
    );
}
