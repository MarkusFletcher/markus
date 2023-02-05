import { projects } from '@/storage/projects.js'

const getAllProjects = () => {
  return projects
}

const getProjectById = (id) => {
  return projects.find(el => el._id === id)
}

const getProjectByIds = (ids) => {
  return projects.map(el => {
    ids.forEach(id => {
        return el._id === id
    });
  })
}

export {
  getAllProjects,
  getProjectById,
  getProjectByIds
}