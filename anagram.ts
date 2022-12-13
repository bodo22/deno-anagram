export function isAnagram(a: string, b: string) {
    const sorteda = a.split('').sort().join()
    const sortedb = b.split('').sort().join()
    return sorteda === sortedb
}