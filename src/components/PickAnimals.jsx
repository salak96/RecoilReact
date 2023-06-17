/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilState } from 'recoil';
import { animalFilterState } from '../atoms';

export default function pickAnimals() {
    const setAninamlFilter = useRecoilState(animalFilterState);
    console.log(setAninamlFilter);

    return (
        <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setAninamlFilter('all')}>
                All
            </button>
            <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setAninamlFilter('dog')}>
                Dog
            </button>
            <button className='bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setAninamlFilter('cat')}>
                Cat
            </button>
        </div>
    );
}
