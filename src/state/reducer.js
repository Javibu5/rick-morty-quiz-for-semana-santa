import { combineReducers } from "redux";
import { ANSWER_CUESTION, FETCH_CHARACTER_SUCCESS } from "../actions";

const realButNotTooMuchCuestions = [
  {
    cuestion: "¿Te gusta ir a otras dimensiones a menudo?",
    answers: ["Si", "No", "Solo si provoco un apocalipsis"]
  },
  {
    cuestion: "¿Cuantas veces has cagado negro después de un botellón?",
    answers: ["2", "4", "6"]
  },
  {
    cuestion: "¿Cual es tu color favorito?",
    answers: ["Rojo", "Amarillo", "Verde"]
  },
  {
    cuestion:
      "Del 1 al 7 sin decimales cómo de bien te lo estas pasando en este quizz",
    answers: ["1", "2", "3", "4", "5", "6", "7"]
  },
  {
    cuestion:
      "Por qué es imposible pensar en el sonido de la R sin mover la lengua",
    answers: ["Si", "No", "Terraza"]
  },
  {
      cuestion: "Si pudieras cambiar algo en cómo te educaron, ¿qué sería?",
      answers: ["nada"]
  },
];

const cuestions = (state = realButNotTooMuchCuestions, action) => {
  switch (action.type) {
    case ANSWER_CUESTION:
      return [...state.slice(0, -1)];
    default:
      return state;
  }
};

const character = (state = null, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  cuestions,
  character
});
