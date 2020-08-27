const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [{
        id: 1, title: 'Iniciando com react', lessons: [
            { id: 1, title: 'Primeira aula' },
            { id: 2, title: 'Segunda aula' }
        ]
    },
    {
        id: 2, title: 'Aprendendo redux', lessons: [
            { id: 1, title: 'Terceira aula' },
            { id: 2, title: 'Quarta aula' }
        ]
    }]
}

export default function courser(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            acrtiveModule: action.module
        }
    }

    return state
}