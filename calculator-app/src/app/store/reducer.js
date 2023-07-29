// init state 
const initState = {
    key: [0],
    keys: [],
    operation: [],
    result: 0,
}

// reducer 
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            // When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
            state.keys[0] === '0' ? state.keys.splice(0,1) : state.keys

            // two . in one number should not be accepted
            if (action.value === '.')
            {
                if (state.keys.includes('.'))
                {
                    action.value = ''
                }
                else if (!/\w/.test(state.keys))
                {
                    state.keys = [0 , ...state.keys]
                }
            }

            console.log(/\w/.test(state.keys))
            console.log(action.value)
            
            state.keys.length === 0 ? state.keys = [action.value] : state.keys = [...state.keys,action.value]
            console.log(state.keys)

            return {
                ...state,
                key: [...state.keys],
                keys: [...state.keys],
                operation: [...state.operation, action.value],
            }

        case 'delete':
            const newState = [...state.keys]
            const i = newState.length
            newState.splice(i - 1, 1)
            return {
                ...state,
                keys: newState
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
            if (state.operation.includes('+') || state.operation.includes('*') || state.operation.includes('/') || state.keys.includes('-'))
            {
                if (action.operator == '+' || action.operator == '*' || action.operator == '/')
                {
                    if (!state.operation.includes('-'))
                    {
                        for (let i = 0; i < state.operation.length; i++)
                        {
                         if (state.operation[i] == '+' || state.operation[i] == '*' || state.operation[i] == '/')
                         {
                             state.operation.splice(i,1)
                         }
                        }
                    }
                    else
                    {
                        for (let i = 0; i < state.operation.length; i++)
                        {
                         if (state.operation[i] == '+' || state.operation[i] == '*' || state.operation[i] == '/' || state.operation[i] == '-')
                         {
                             state.operation.splice(i ,2)
                             
                         }
                        }
                    }
                }

            }

            return {
                ...state,
                key: state.key,
                keys: [],
                operation: [...state.operation, action.operator],
            }

        case 'result':
            if (/\W/.test(state.operation[0])) {
                state.operation.unshift(state.result)
            }

            let calculation = state.operation.join('')
            let total = parseFloat(eval(calculation).toFixed(15))
            // round number that close to 0 or close to 1
            if (Math.abs(total % 1) < 0.00001 || Math.abs(total % 1) > 0.999998) 
            {
                total = total.toFixed(0)
            }
            return {
                ...state,
                key: total,
                keys: [],
                operation: [],
                result: total
            }
    }
}

export { initState, inputReducer }
