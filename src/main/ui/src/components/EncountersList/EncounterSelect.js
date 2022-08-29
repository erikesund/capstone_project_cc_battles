import React from "react";
import styles from './styles.module.css'
import { EncounterOption } from "./EncounterOption";
import { GameNarrator } from "components/Narrator";

export const EncounterSelect = ({encountersData, onEncounterClick, viewModeClick}) => {

  const encounterList = encountersData.map((encounter, index) => {
    if (encountersData === null) {
      return null;
    } else {
      return (
        <EncounterOption
        encounter={encounter}
        onClick={onEncounterClick}
        key={encounter.id}
        viewModeClick={viewModeClick}
        />
      );
    }
  });

  return (
    <div className={styles.main}>
      <h3>
        <GameNarrator script={'Choose your path'}/>
      </h3>
      <div className={styles.main}>
        {encounterList}
      </div>
    </div>
  );
};