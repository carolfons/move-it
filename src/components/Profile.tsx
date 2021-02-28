import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';
export function Profile(){
  const {level} = useContext(ChallengesContext);
  return(
    <div className= {styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/45009920?s=460&u=741f2d2c5c86cc7e8d3fd9f2900599ca9d03b7bf&v=4" alt="Caroline Fonseca"/>
      <div>
        <strong>Caroline Fonseca</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>

  );
}