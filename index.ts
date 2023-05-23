const isSandPack = (): boolean => {
  if(typeof globalThis.process === 'undefined') {
    return false
  }

  if(globalThis.os.hostname() !== 'nodebox') {
    return false
  }

  return globalThis.os.cpus().every(cpu => cpu.model === 'Virtual CPU')
}

export {
  isSandPack
}