import styles from './styles.module.css';
import React from 'react';
import { HealthBar } from '../HealthBar';

export const Enemy = ({enemy, health}) => {

  if (enemy === undefined){
    return null
  }
    return (
      <div className={styles.main}>
       <div className = {styles.HealthBar}>
       <HealthBar label ="Health" current ={health} max = {enemy.maxHealth}   />
       <p>{enemy.name}</p>
       </div>
      </div>
    );
   
  };