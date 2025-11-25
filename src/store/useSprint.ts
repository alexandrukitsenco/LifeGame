import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

export interface Task {
  name: string
  category: string
  effort: number
  createdAt: Date
}

export const useSprintStore = defineStore('sprint', () => {
  const goal = useStorage<number | null>('goal', null)
  const tasks = useStorage<Task[]>('tasks', [])

  const totalEffort = computed(() => {
    return tasks.value.reduce((acc, task) => acc + task.effort, 0)
  })

  const progress = computed(() => {
    if (!goal.value || goal.value === 0) return 0
    return (totalEffort.value / goal.value) * 100
  })

  const taskLogsSorted = computed(() => {
    const localTaskLogs = [...tasks.value]
    return localTaskLogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  })

  const suggestedTasks = computed(() => {
    const localTasks = [...tasks.value]

    const frequencies = localTasks.reduce((acc, task) => {
      acc[task.name] = (acc[task.name] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const uniqueTasks = Object.values(
      localTasks.reduce((acc, task) => {
        if (!acc[task.name]) acc[task.name] = task
        return acc
      }, {} as Record<string, Task>)
    )

    const sortedUnique = uniqueTasks.sort((a, b) => {
      return frequencies[b.name] - frequencies[a.name]
    })

    return sortedUnique.slice(0, 10)
  })

  const addTask = (task: Omit<Task, 'createdAt'> | Task) => {
    tasks.value.push({
      ...task,
      createdAt: new Date()
    })
  }

  const deleteTask = (createdAt: Date) => {
    tasks.value = tasks.value.filter((task) => task.createdAt !== createdAt)
  }

  const deleteSprint = () => {
    goal.value = null
    tasks.value = []
  }

  const searchTasks = (query: string): Task[] => {
    if (query.length <= 2) return []
    
    return tasks.value
      .filter((task) => task.name.toLowerCase().includes(query.toLowerCase()))
      .reduce((acc, task) => {
        if (!acc.some((t) => t.name === task.name)) {
          acc.push(task)
        }
        return acc
      }, [] as Task[])
  }

  return {
    goal,
    tasks,
    totalEffort,
    progress,
    taskLogsSorted,
    suggestedTasks,
    addTask,
    deleteTask,
    deleteSprint,
    searchTasks
  }
})
