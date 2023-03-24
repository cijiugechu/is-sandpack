import { hostname, cpus } from 'os'

const isSandPack = () => {
  if(typeof process === 'undefined') {
    return false
  }

  if(hostname() !== 'nodebox') {
    return false
  }

  return cpus().every(cpu => cpu.model === 'Virtual CPU')
}

export {
  isSandPack
}