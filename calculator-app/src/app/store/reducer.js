// init state 
const initState = {
    key: 0,
    keys: [],
    operation: [],
    result: 0,
}

// reducer 
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            // When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
            state.keys[0] === '0' ? state.keys.splice(0, 1) : state.keys
            state.operation[0] === '0' ? state.operation.splice(0, 1) : state.operation

            // two . in one number should not be accepted
            if (action.value === '.') {
                if (state.keys.includes('.')) {
                    action.value = ''
                }
                else if (!/\w/.test(state.keys)) 
                {
                    state.keys = [0, ...state.keys]
                    if (!/\w/.test(state.operation))
                    {
                        state.operation = [0, ...state.operation]
                    }
                }
            }
            state.keys.length === 0 || action.value == action.key.operator ? state.keys = [action.value] : state.keys = [...state.keys, action.value]
            state.operation.length === 0 ? state.operation = [action.value] : state.operation = [...state.operation, action.value]
            console.log(state.keys)
            console.log(state.operation)
            return ({
                ...state,
                // key: [...state.keys],
                keys: [...state.keys],
                operation: [...state.operation],
            })

        case 'delete':
            const newState = [...state.keys]
            const i = newState.length
            newState.splice(i - 1, 1)
            return {
                ...state,
                keys: newState,
                operation: newState
            }

        case 'reset':
            return {
                ...state,
                key: 0,
                keys: [],
                operation: [],
                result: 0
            }

        case 'calculate':
            // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign)
            let length = state.operation.length
            console.log(state.operation)
            if (!/\w/.test(state.operation)) 
            {
                if (state.operation[length - 2] == '+' || state.operation[length - 2] == '*' || state.operation[length - 2] == '/' || state.operation[length - 2] == '-') {
                    state.operation.splice(length - 2, 1)
                }
                else {
                    state.operation = [...state.operation]
                }

            }
            else {
                if (action.operator != '-') {
                    if (state.operation[length - 2] == '-') 
                    {
                        if (!/\w/.test(state.operation[length - 3]))
                        {
                            state.operation.splice(length - 3, 2)
                        }
                        else
                        {
                            state.operation.splice(length - 2, 1)
                        }
                    }
                    else if (state.operation[length - 2] == '+' || state.operation[length - 2] == '*' || state.operation[length - 2] == '/') {
                        state.operation.splice(length - 2, 1)
                    }
                    else {
                        state.operation = [...state.operation]
                    }
                }
            }

            return {
                ...state,
                // key: state.keys,
                keys: [...state.operation],
                operation: [...state.operation],
            }

        case 'result':
            if (/\W/.test(state.operation[0])) {
                state.operation.unshift(state.result)
            }
            let calculation = state.operation.join('')
            // console.log(state.operation)
            // console.log(state.keys)
            let total;

            function calculateStr(userInput) {
                return new Function('return ' + userInput)();
            }

            if (state.operation.length === 0 || !/\w/.test(state.operation)) {
                total = 0;
            }
            else {
                total = parseFloat(calculateStr(calculation).toFixed(10))
            }

            // round number that close to 0 or close to 1
            if (Math.abs(total % 1) < 0.00001 || Math.abs(total % 1) > 0.999998) {
                total = parseInt(total.toFixed(0))
            }
            // console.log(total)
            return {
                ...state,
                key: total,
                keys: [],
                operation: [],
                result: total
            }

        default:
            throw new Error
    }
}

export { initState, inputReducer }
