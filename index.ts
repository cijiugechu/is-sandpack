import { hostname, cpus } from 'os'

const isSandPack = () => {
  if(hostname() !== 'nodebox') {
    return false
  }

  return cpus().every(cpu => cpu.model === 'Virtual CPU')
}

export {
  isSandPack
}