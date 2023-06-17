import { useRecoilValue } from "recoil";
import { animalsState } from "../atoms";
import dog from "../assets/dog.avif";
import cat from "../assets/cat.avif";

export default function Animals() {
    const animals = useRecoilValue(animalsState)
  
    const getIcon = (animalType) => {
      switch (animalType) {
        case 'dog':
          return dog
        case 'cat':
          return cat
        default:
          return
      }
    }
  
    return (
      <div>
        <h1>Animals:</h1>
        {animals.map((animal) => (
          <div key={animal.id} style={styles.animal}>
            {animal.name} is {animal.type}
            <img
              src={getIcon(animal.type)}
              style={styles.icon}
              alt={animal.type}
            />
          </div>
        ))}
      </div>
    )
  }
  
  const styles = {
    animal: {
      display: 'flex',
      alignItems: 'center',
      margin: '12px 0',
      fontSize: '20px',
    },
    icon: {
      height: '40px',
      marginLeft: '12px',
    },
  }