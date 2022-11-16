import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'


// Sirve para agrupar varios archivos en donde guardas datos o defines datos
// los agrupa en uno para acceder a ellos desde cualquier lugar
export const store = configureStore({
    reducer: {
        tasks : tasksReducer
    }
})
// Los reducer son la forma en la podemos actualizar y alterar el "Estado"
// Slice : es una parte de todo el estado
