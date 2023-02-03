import { projects } from '@/storage/projects.js'

const getAllProjects = () => {
  return projects
}

const getProjectById = (id) => {
  return projects.map(el => el.id === id)[0]
}

const getProjectByIds = (ids) => {
  return projects.map(el => {
    ids.forEach(id => {
        return el.id === id
    });
  })
}

export {
  getAllProjects,
  getProjectById,
  getProjectByIds
}