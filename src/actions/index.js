export const ANSWER_CUESTION = "ANSWER_CUESTION";
export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";

export const answerCuestion = () => ({
  type: ANSWER_CUESTION
});

export const fetchCharacter = () => ({
  type: FETCH_CHARACTER
});

export const fetchCharacterSuccess = character => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: character
});
