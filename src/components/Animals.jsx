import { useRecoilValue } from 'recoil';
import dog from '../assets/dog.avif';
import cat from '../assets/cat.avif';
import { filteredAnimals } from '../Recoil/selector';

export default function Animals() {
    const animals = useRecoilValue(filteredAnimals);
    // console.log(animals);
    // Memperbarui const animals = useRecoilValue(animalsState) menjadi const animals = useRecoilValue(filteredAnimals)

    const getIcon = (animalType) => {
        switch (animalType) {
            case 'dog':
                return dog;
            case 'cat':
                return cat;
            default:
                return;
        }
    };

    return (
        <div className='flex flex-col justify-center align-items-center  mx-auto p-4 bg-gray-200'>
            <h1 className='text-3xl'>Animals:</h1>
            {animals.map((animal) => (
                <div key={animal.id} className='flex flex-col justify-center align-items-center  mx-auto p-4 bg-gray-200'>
                    {animal.name} is {animal.type}
                    <img className='w-20' src={getIcon(animal.type)} alt={animal.name} />
                </div>
            ))}
        </div>
    );
}

